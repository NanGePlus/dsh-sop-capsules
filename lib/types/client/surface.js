/**
 * Per-session SOP capsules client state: library load, pick/manage overlay, and Remote mutations.
 * @module @nangeagi/dsh-sop-capsules/client/surface
 */
import { createSnapshotStore } from '@deepseek-ai/dsh-client-store';
import { parseGroupYaml, stringifyGroupYaml } from "../group-yaml.js";
const INITIAL = Object.freeze({
    libraryStatus: 'idle',
    panelOpen: false,
    panelMode: 'pick',
    groups: [],
    listError: null,
    selectedGroupId: null,
    groupStatus: 'idle',
    capsules: [],
    groupError: null,
    searchQuery: '',
    injectMode: 'replace',
    injecting: false,
    editor: { kind: 'none' },
    confirm: null,
    mutationStatus: 'idle',
    mutationError: null,
    orphanBanner: false,
});
/** localStorage key for workspace-scoped Replace/Append preference. */
export function injectModeStorageKey(workspaceId) {
    return `sop-capsules:inject-mode:${workspaceId}`;
}
/**
 * Mint a file-safe group-id or capsule-id. v1 never offers a rename-id UI.
 * @param prefix - `g` for groups, `c` for capsules.
 * @returns a unique id.
 */
export function newStableId(prefix) {
    return `${prefix}-${crypto.randomUUID()}`;
}
/**
 * Move `draggedId` to the current index of `targetId`.
 * @param ids - current order.
 * @param draggedId - id being dropped.
 * @param targetId - drop target id.
 * @returns a new ordered array, or the original order when ids are unknown.
 */
export function moveIdBefore(ids, draggedId, targetId) {
    if (draggedId === targetId)
        return ids;
    const from = ids.indexOf(draggedId);
    const to = ids.indexOf(targetId);
    if (from < 0 || to < 0)
        return ids;
    const next = [...ids];
    next.splice(from, 1);
    next.splice(to, 0, draggedId);
    return next;
}
/** File-stem group-id from an import/export filename. */
function groupIdFromFilename(filename) {
    return filename.replace(/\.(ya?ml)$/i, '');
}
/**
 * Session-scoped SOP capsules controller backing header and overlay entries.
 */
export class SopCapsulesSurface {
    listLibrary;
    getGroup;
    sessionId;
    mutate;
    /** Shared session view for inject hooks. */
    state;
    disposed = false;
    groupRequest = 0;
    /**
     * @param listLibrary - Host `sopCapsules.listLibrary` for this session.
     * @param getGroup - Host `sopCapsules.getGroup` for this session.
     * @param sessionId - owning session id.
     * @param mutate - Host save/delete/reorder used by manage CRUD.
     */
    constructor(listLibrary, getGroup, sessionId, mutate) {
        this.listLibrary = listLibrary;
        this.getGroup = getGroup;
        this.sessionId = sessionId;
        this.mutate = mutate;
        this.state = createSnapshotStore({ ...INITIAL });
    }
    /** Start the first library read when the session has a workspace binding. */
    ensureLibrary() {
        if (this.disposed)
            return;
        const status = this.state.getSnapshot().libraryStatus;
        if (status === 'loading' || status === 'ready' || status === 'no-workspace')
            return;
        this.state.update(draft => {
            draft.listError = null;
            draft.libraryStatus = 'loading';
        });
        void this.listLibrary(this.sessionId).then((result) => {
            if (this.disposed)
                return;
            this.state.update((draft) => {
                if (!result.ok) {
                    draft.libraryStatus = result.error.code === 'sop-capsules/no-workspace'
                        ? 'no-workspace'
                        : 'idle';
                    if (result.error.code !== 'sop-capsules/no-workspace') {
                        draft.listError = result.error.message;
                    }
                    return;
                }
                draft.libraryStatus = 'ready';
                draft.groups = result.value.groups;
                draft.listError = null;
                if (result.value.adoptedOrphanIds.length > 0)
                    draft.orphanBanner = true;
                if (draft.selectedGroupId === null && result.value.groups.length > 0) {
                    draft.selectedGroupId = result.value.groups[0].id;
                }
            });
            const selected = this.state.getSnapshot().selectedGroupId;
            if (selected !== null)
                this.loadGroup(selected);
        }).catch(() => {
            if (this.disposed)
                return;
            this.state.update(draft => {
                draft.libraryStatus = 'idle';
                draft.listError = 'Remote unavailable';
            });
        });
    }
    /** Open the composer overlay panel for this session. */
    openPanel() {
        if (this.disposed)
            return;
        this.state.update(draft => {
            draft.panelOpen = true;
            draft.panelMode = 'pick';
        });
        this.ensureLibrary();
        const { selectedGroupId, groupStatus, libraryStatus } = this.state.getSnapshot();
        if (libraryStatus === 'ready' && selectedGroupId !== null && groupStatus === 'idle') {
            this.loadGroup(selectedGroupId);
        }
    }
    /** Close the composer overlay panel for this session. */
    closePanel() {
        if (this.disposed)
            return;
        this.state.update(draft => { draft.panelOpen = false; });
    }
    /** Switch segmented panel mode. */
    setPanelMode(mode) {
        if (this.disposed)
            return;
        this.state.update(draft => { draft.panelMode = mode; });
    }
    /** Select a group and load its capsules. */
    selectGroup(groupId) {
        if (this.disposed)
            return;
        this.state.update(draft => {
            draft.selectedGroupId = groupId;
            draft.searchQuery = '';
        });
        this.loadGroup(groupId);
    }
    /** Update the pick-path title filter. */
    setSearchQuery(query) {
        if (this.disposed)
            return;
        this.state.update(draft => { draft.searchQuery = query; });
    }
    /** Update Replace/Append preference in session view. */
    setInjectMode(mode) {
        if (this.disposed)
            return;
        this.state.update(draft => { draft.injectMode = mode; });
    }
    /** Dismiss the orphan-group informational banner. */
    dismissOrphanBanner() {
        if (this.disposed)
            return;
        this.state.update(draft => { draft.orphanBanner = false; });
    }
    /** Clear list-level error banner state. */
    dismissListError() {
        if (this.disposed)
            return;
        this.state.update(draft => { draft.listError = null; });
    }
    /** Retry loading the selected group after a Remote failure. */
    retryGroupLoad() {
        if (this.disposed)
            return;
        const groupId = this.state.getSnapshot().selectedGroupId;
        if (groupId === null)
            return;
        this.loadGroup(groupId);
    }
    /**
     * Inject one capsule body into the composer draft and close on success.
     * When `prepare` is set, the draft is written after it settles, including
     * when it rejects, so a catalog failure still injects plain text.
     * @param body - capsule body text.
     * @param readDraft - current composer draft projection.
     * @param writeDraft - replace composer draft.
     * @param close - close overlay after inject.
     * @param prepare - optional work that must finish before the draft is written.
     */
    injectCapsule(body, readDraft, writeDraft, close, prepare) {
        if (this.disposed)
            return;
        if (this.state.getSnapshot().injecting)
            return;
        const write = () => {
            if (this.disposed)
                return;
            const mode = this.state.getSnapshot().injectMode;
            const current = readDraft();
            const next = mode === 'replace'
                ? body
                : (current.trim() === '' ? body : `${current}\n\n${body}`);
            writeDraft(next);
            close();
        };
        this.state.update(draft => { draft.injecting = true; });
        if (prepare === undefined) {
            try {
                write();
            }
            finally {
                this.state.update(draft => { draft.injecting = false; });
            }
            return;
        }
        void prepare().then(write, write).finally(() => {
            if (this.disposed)
                return;
            this.state.update(draft => { draft.injecting = false; });
        });
    }
    /** Open an empty new-group editor. */
    beginNewGroup() {
        if (this.disposed)
            return;
        this.state.update(draft => {
            draft.editor = { kind: 'group-new', displayName: '' };
            draft.mutationError = null;
        });
    }
    /**
     * Open a rename editor for a group's displayName.
     * @param groupId - target group id.
     */
    beginRenameGroup(groupId) {
        if (this.disposed)
            return;
        const group = this.state.getSnapshot().groups.find(row => row.id === groupId);
        this.state.update(draft => {
            draft.editor = {
                kind: 'group-rename',
                groupId,
                displayName: group?.displayName ?? '',
            };
            draft.mutationError = null;
        });
    }
    /** Open an empty new-capsule editor for the selected group. */
    beginNewCapsule() {
        if (this.disposed)
            return;
        this.state.update(draft => {
            draft.editor = { kind: 'capsule-new', title: '', body: '' };
            draft.mutationError = null;
        });
    }
    /**
     * Open an edit editor for one capsule's title and body.
     * @param capsuleId - target capsule id in the selected group.
     */
    beginEditCapsule(capsuleId) {
        if (this.disposed)
            return;
        const capsule = this.state.getSnapshot().capsules.find(row => row.id === capsuleId);
        this.state.update(draft => {
            draft.editor = {
                kind: 'capsule-edit',
                capsuleId,
                title: capsule?.title ?? '',
                body: capsule?.body ?? '',
            };
            draft.mutationError = null;
        });
    }
    /**
     * Update displayName in an open group editor.
     * @param value - next displayName.
     */
    setEditorDisplayName(value) {
        if (this.disposed)
            return;
        this.state.update(draft => {
            if (draft.editor.kind === 'group-new' || draft.editor.kind === 'group-rename') {
                draft.editor = { ...draft.editor, displayName: value };
            }
        });
    }
    /**
     * Update title in an open capsule editor.
     * @param value - next title.
     */
    setEditorTitle(value) {
        if (this.disposed)
            return;
        this.state.update(draft => {
            if (draft.editor.kind === 'capsule-new' || draft.editor.kind === 'capsule-edit') {
                draft.editor = { ...draft.editor, title: value };
            }
        });
    }
    /**
     * Update body in an open capsule editor.
     * @param value - next body.
     */
    setEditorBody(value) {
        if (this.disposed)
            return;
        this.state.update(draft => {
            if (draft.editor.kind === 'capsule-new' || draft.editor.kind === 'capsule-edit') {
                draft.editor = { ...draft.editor, body: value };
            }
        });
    }
    /** Close the editor without calling Remote. */
    cancelEditor() {
        if (this.disposed)
            return;
        this.state.update(draft => {
            draft.editor = { kind: 'none' };
            draft.mutationError = null;
        });
    }
    /** Persist the open editor via `saveGroup`. On RemoteError the editor fields stay. */
    commitEditor() {
        if (this.disposed)
            return;
        const snap = this.state.getSnapshot();
        if (snap.mutationStatus === 'submitting')
            return;
        const editor = snap.editor;
        if (editor.kind === 'none')
            return;
        this.state.update(draft => {
            draft.mutationStatus = 'submitting';
            draft.mutationError = null;
        });
        void this.persistEditor(editor).then((error) => {
            if (this.disposed)
                return;
            this.state.update(draft => {
                draft.mutationStatus = 'idle';
                if (error !== null) {
                    draft.mutationError = error;
                    return;
                }
                draft.editor = { kind: 'none' };
                draft.mutationError = null;
            });
        });
    }
    /**
     * Open delete-group confirmation.
     * @param groupId - group to delete after confirm.
     */
    requestDeleteGroup(groupId) {
        if (this.disposed)
            return;
        this.state.update(draft => {
            draft.confirm = { kind: 'delete-group', groupId };
            draft.mutationError = null;
        });
    }
    /**
     * Open delete-capsule confirmation.
     * @param capsuleId - capsule to delete after confirm.
     */
    requestDeleteCapsule(capsuleId) {
        if (this.disposed)
            return;
        this.state.update(draft => {
            draft.confirm = { kind: 'delete-capsule', capsuleId };
            draft.mutationError = null;
        });
    }
    /** Dismiss the confirm dialog without mutating. */
    cancelConfirm() {
        if (this.disposed)
            return;
        this.state.update(draft => { draft.confirm = null; });
    }
    /** Run the pending confirm after the user confirms. */
    confirmMutation() {
        if (this.disposed)
            return;
        const snap = this.state.getSnapshot();
        if (snap.mutationStatus === 'submitting' || snap.confirm === null)
            return;
        const pending = snap.confirm;
        this.state.update(draft => {
            draft.mutationStatus = 'submitting';
            draft.mutationError = null;
        });
        void this.persistDelete(pending).then((error) => {
            if (this.disposed)
                return;
            this.state.update(draft => {
                draft.mutationStatus = 'idle';
                if (error !== null) {
                    draft.mutationError = error;
                    return;
                }
                draft.confirm = null;
                draft.mutationError = null;
            });
        });
    }
    /**
     * Parse a single-group yaml file and open the import confirm dialog.
     * @param filename - download or upload name; stem is the group-id.
     * @param raw - yaml document isomorphic with `groups/<group-id>.yaml`.
     */
    async prepareImport(filename, raw) {
        if (this.disposed)
            return;
        const groupId = groupIdFromFilename(filename).trim();
        if (groupId === '') {
            this.state.update(draft => { draft.mutationError = 'invalid group file'; });
            return;
        }
        try {
            const group = parseGroupYaml(raw, groupId);
            let deleteCount = 0;
            const known = this.state.getSnapshot().groups.some(row => row.id === groupId);
            if (known) {
                const current = await this.getGroup(this.sessionId, groupId);
                if (!current.ok) {
                    this.state.update(draft => { draft.mutationError = current.error.message; });
                    return;
                }
                const incoming = new Set(group.capsules.map(row => row.id));
                deleteCount = current.value.capsules.filter(row => !incoming.has(row.id)).length;
            }
            this.state.update(draft => {
                draft.confirm = { kind: 'import-group', group, deleteCount };
                draft.mutationError = null;
            });
        }
        catch (error) {
            // Invalid yaml or missing required group fields.
            void error;
            this.state.update(draft => { draft.mutationError = 'invalid group file'; });
        }
    }
    /**
     * Serialize the selected group as `groups/<group-id>.yaml`.
     * @returns filename plus yaml body, or null when no group is selected or Remote fails.
     */
    async exportSelectedGroup() {
        if (this.disposed)
            return null;
        const groupId = this.state.getSnapshot().selectedGroupId;
        if (groupId === null)
            return null;
        try {
            const result = await this.getGroup(this.sessionId, groupId);
            if (!result.ok) {
                this.state.update(draft => { draft.mutationError = result.error.message; });
                return null;
            }
            return { filename: `${result.value.id}.yaml`, body: stringifyGroupYaml(result.value) };
        }
        catch (error) {
            // Typert Remote client threw instead of returning `{ ok: false }`.
            void error;
            this.state.update(draft => { draft.mutationError = 'Remote unavailable'; });
            return null;
        }
    }
    /**
     * Persist a new group order covering every registered group-id.
     * @param groupIds - ordered ids.
     */
    reorderGroups(groupIds) {
        if (this.disposed)
            return;
        if (this.state.getSnapshot().mutationStatus === 'submitting')
            return;
        this.state.update(draft => {
            draft.mutationStatus = 'submitting';
            draft.mutationError = null;
        });
        void this.mutate.reorderGroups(this.sessionId, groupIds).then(async (result) => {
            if (this.disposed)
                return;
            if (!result.ok) {
                this.state.update(draft => {
                    draft.mutationStatus = 'idle';
                    draft.mutationError = result.error.message;
                });
                return;
            }
            await this.refreshLibrary();
            this.state.update(draft => {
                draft.mutationStatus = 'idle';
                draft.mutationError = null;
            });
        }).catch(() => {
            if (this.disposed)
                return;
            this.state.update(draft => {
                draft.mutationStatus = 'idle';
                draft.mutationError = 'Remote unavailable';
            });
        });
    }
    /**
     * Persist a new capsule order inside the selected group.
     * @param capsuleIds - ordered capsule ids covering the selected group.
     */
    reorderCapsules(capsuleIds) {
        if (this.disposed)
            return;
        const snap = this.state.getSnapshot();
        if (snap.mutationStatus === 'submitting' || snap.selectedGroupId === null)
            return;
        const groupId = snap.selectedGroupId;
        const displayName = snap.groups.find(row => row.id === groupId)?.displayName ?? groupId;
        const byId = new Map(snap.capsules.map(row => [row.id, row]));
        const capsules = capsuleIds.flatMap((id) => {
            const row = byId.get(id);
            return row === undefined ? [] : [row];
        });
        if (capsules.length !== snap.capsules.length)
            return;
        this.state.update(draft => {
            draft.mutationStatus = 'submitting';
            draft.mutationError = null;
        });
        void this.mutate.saveGroup(this.sessionId, { id: groupId, displayName, capsules }).then((result) => {
            if (this.disposed)
                return;
            if (!result.ok) {
                this.state.update(draft => {
                    draft.mutationStatus = 'idle';
                    draft.mutationError = result.error.message;
                });
                return;
            }
            this.loadGroup(groupId);
            this.state.update(draft => {
                draft.mutationStatus = 'idle';
                draft.mutationError = null;
            });
        }).catch(() => {
            if (this.disposed)
                return;
            this.state.update(draft => {
                draft.mutationStatus = 'idle';
                draft.mutationError = 'Remote unavailable';
            });
        });
    }
    /** Release the snapshot store listeners. */
    dispose() {
        this.disposed = true;
    }
    async persistEditor(editor) {
        try {
            if (editor.kind === 'group-new') {
                const displayName = editor.displayName.trim();
                if (displayName === '')
                    return 'displayName required';
                const group = { id: newStableId('g'), displayName, capsules: [] };
                const result = await this.mutate.saveGroup(this.sessionId, group);
                if (!result.ok)
                    return result.error.message;
                await this.refreshLibrary();
                this.selectGroup(group.id);
                return null;
            }
            if (editor.kind === 'group-rename') {
                const displayName = editor.displayName.trim();
                if (displayName === '')
                    return 'displayName required';
                const current = await this.getGroup(this.sessionId, editor.groupId);
                if (!current.ok)
                    return current.error.message;
                const result = await this.mutate.saveGroup(this.sessionId, { ...current.value, displayName });
                if (!result.ok)
                    return result.error.message;
                await this.refreshLibrary();
                return null;
            }
            const selected = this.state.getSnapshot().selectedGroupId;
            if (selected === null)
                return 'no group selected';
            const current = await this.getGroup(this.sessionId, selected);
            if (!current.ok)
                return current.error.message;
            const title = editor.title.trim();
            const body = editor.body.trim();
            if (title === '' || body === '')
                return 'title and body required';
            const capsules = editor.kind === 'capsule-new'
                ? [...current.value.capsules, { id: newStableId('c'), title, body }]
                : current.value.capsules.map(row => (row.id === editor.capsuleId ? { ...row, title, body } : row));
            const result = await this.mutate.saveGroup(this.sessionId, { ...current.value, capsules });
            if (!result.ok)
                return result.error.message;
            this.loadGroup(selected);
            return null;
        }
        catch (error) {
            // Typert Remote client threw instead of returning `{ ok: false }`.
            void error;
            return 'Remote unavailable';
        }
    }
    async persistDelete(pending) {
        try {
            if (pending.kind === 'import-group') {
                const result = await this.mutate.saveGroup(this.sessionId, pending.group);
                if (!result.ok)
                    return result.error.message;
                await this.refreshLibrary();
                this.selectGroup(pending.group.id);
                return null;
            }
            if (pending.kind === 'delete-group') {
                const result = await this.mutate.deleteGroup(this.sessionId, pending.groupId);
                if (!result.ok)
                    return result.error.message;
                const previous = this.state.getSnapshot().selectedGroupId;
                await this.refreshLibrary();
                const groups = this.state.getSnapshot().groups;
                if (previous === pending.groupId) {
                    const next = groups[0]?.id ?? null;
                    this.state.update(draft => {
                        draft.selectedGroupId = next;
                        draft.capsules = [];
                    });
                    if (next !== null)
                        this.loadGroup(next);
                }
                return null;
            }
            const selected = this.state.getSnapshot().selectedGroupId;
            if (selected === null)
                return 'no group selected';
            const current = await this.getGroup(this.sessionId, selected);
            if (!current.ok)
                return current.error.message;
            const result = await this.mutate.saveGroup(this.sessionId, {
                ...current.value,
                capsules: current.value.capsules.filter(row => row.id !== pending.capsuleId),
            });
            if (!result.ok)
                return result.error.message;
            this.loadGroup(selected);
            return null;
        }
        catch (error) {
            // Typert Remote client threw instead of returning `{ ok: false }`.
            void error;
            return 'Remote unavailable';
        }
    }
    async refreshLibrary() {
        const result = await this.listLibrary(this.sessionId);
        if (this.disposed)
            return;
        this.state.update((draft) => {
            if (!result.ok) {
                draft.listError = result.error.message;
                return;
            }
            draft.groups = result.value.groups;
            draft.listError = null;
            if (result.value.adoptedOrphanIds.length > 0)
                draft.orphanBanner = true;
        });
    }
    loadGroup(groupId) {
        const requestId = ++this.groupRequest;
        this.state.update(draft => {
            draft.groupStatus = 'loading';
            draft.groupError = null;
            draft.capsules = [];
        });
        void this.getGroup(this.sessionId, groupId).then((result) => {
            if (this.disposed || requestId !== this.groupRequest)
                return;
            this.state.update((draft) => {
                if (!result.ok) {
                    draft.groupStatus = 'error';
                    draft.groupError = result.error.message;
                    draft.capsules = [];
                    return;
                }
                draft.groupStatus = 'ready';
                draft.capsules = result.value.capsules;
                draft.groupError = null;
            });
        }).catch(() => {
            if (this.disposed || requestId !== this.groupRequest)
                return;
            this.state.update(draft => {
                draft.groupStatus = 'error';
                draft.groupError = 'Remote unavailable';
                draft.capsules = [];
            });
        });
    }
}
/**
 * Resolve or create the surface for one session.
 * @param ctx - client root context carrying the remote namespace.
 * @param surfaces - session cache mutated by this helper.
 * @param sessionId - target session.
 * @returns the live surface for inject wiring.
 */
export function surfaceFor(ctx, surfaces, sessionId) {
    let surface = surfaces.get(sessionId);
    if (surface === undefined) {
        surface = new SopCapsulesSurface((id, signal) => ctx.remote.sopCapsules.listLibrary(id, signal), (id, groupId, signal) => ctx.remote.sopCapsules.getGroup(id, groupId, signal), sessionId, {
            saveGroup: (id, group, signal) => ctx.remote.sopCapsules.saveGroup(id, group, signal),
            deleteGroup: (id, groupId, signal) => ctx.remote.sopCapsules.deleteGroup(id, groupId, signal),
            reorderGroups: (id, groupIds, signal) => ctx.remote.sopCapsules.reorderGroups(id, groupIds, signal),
        });
        surfaces.set(sessionId, surface);
    }
    return surface;
}
//# sourceMappingURL=surface.js.map