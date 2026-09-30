import type { SnapshotStore } from '@deepseek-ai/dsh-client-store';
import type { Context as ClientContext } from '@deepseek-ai/cordis';
import type { SessionId } from '@deepseek-ai/dsh-session/types';
import type { RemoteResult } from '@deepseek-ai/dsh-typert-protocol';
import type { SopCapsule, SopCapsuleGroup, SopLibraryGroupSummary, SopLibrarySummary } from '../types.ts';
/** Progress of the session's first `listLibrary` read for header gating. */
export type SopCapsulesLibraryStatus = 'idle' | 'loading' | 'ready' | 'no-workspace';
/** Overlay panel mode. */
export type SopCapsulesPanelMode = 'pick' | 'manage';
/** Load lifecycle for the selected group's capsule list. */
export type SopCapsulesGroupStatus = 'idle' | 'loading' | 'ready' | 'error';
/** In-progress manage editor; retained when `saveGroup` returns RemoteError. */
export type SopCapsulesEditor = {
    readonly kind: 'none';
} | {
    readonly kind: 'group-new';
    readonly displayName: string;
} | {
    readonly kind: 'group-rename';
    readonly groupId: string;
    readonly displayName: string;
} | {
    readonly kind: 'capsule-new';
    readonly title: string;
    readonly body: string;
} | {
    readonly kind: 'capsule-edit';
    readonly capsuleId: string;
    readonly title: string;
    readonly body: string;
};
/** Pending destructive or import confirm dialog. */
export type SopCapsulesConfirm = null | {
    readonly kind: 'delete-group';
    readonly groupId: string;
} | {
    readonly kind: 'delete-capsule';
    readonly capsuleId: string;
} | {
    readonly kind: 'import-group';
    readonly group: SopCapsuleGroup;
    readonly deleteCount: number;
};
/** Host mutate methods used by the manage path. */
export interface SopCapsulesMutateRemote {
    saveGroup: (sessionId: SessionId, group: SopCapsuleGroup, signal?: AbortSignal) => Promise<RemoteResult<void>>;
    deleteGroup: (sessionId: SessionId, groupId: string, signal?: AbortSignal) => Promise<RemoteResult<void>>;
    reorderGroups: (sessionId: SessionId, groupIds: readonly string[], signal?: AbortSignal) => Promise<RemoteResult<void>>;
}
/** Immutable view shared by the header entry and composer overlay. */
export interface SopCapsulesSessionView {
    /** First library fetch lifecycle for the bound workspace. */
    libraryStatus: SopCapsulesLibraryStatus;
    /** Whether the sop-capsules-panel overlay is open. */
    panelOpen: boolean;
    /** Pick vs manage segmented mode (pick is default). */
    panelMode: SopCapsulesPanelMode;
    /** Group summaries from the last successful `listLibrary`. */
    groups: readonly SopLibraryGroupSummary[];
    /** User-visible list-level Remote failure (banner). */
    listError: string | null;
    /** Selected group id in pick/manage sidebars. */
    selectedGroupId: string | null;
    /** Selected group capsule fetch lifecycle. */
    groupStatus: SopCapsulesGroupStatus;
    /** Capsules for the selected group when `groupStatus` is `ready`. */
    capsules: readonly SopCapsule[];
    /** User-visible group-level Remote failure (banner). */
    groupError: string | null;
    /** Title filter within the selected group (kept across Pick/Manage). */
    searchQuery: string;
    /** Replace vs Append composer injection preference. */
    injectMode: 'replace' | 'append';
    /** True while one inject call is in flight (disables repeat clicks). */
    injecting: boolean;
    /** Open manage editor form; kept after a failed save so the user can retry. */
    editor: SopCapsulesEditor;
    /** Open delete confirmation, if any. */
    confirm: SopCapsulesConfirm;
    /** True while a save/delete/reorder Remote call is in flight. */
    mutationStatus: 'idle' | 'submitting';
    /** User-visible mutation failure kept with the editor. */
    mutationError: string | null;
    /** Informational banner after Host adopted orphan groups on `listLibrary`. */
    orphanBanner: boolean;
}
/** localStorage key for workspace-scoped Replace/Append preference. */
export declare function injectModeStorageKey(workspaceId: string): string;
/**
 * Mint a file-safe group-id or capsule-id. v1 never offers a rename-id UI.
 * @param prefix - `g` for groups, `c` for capsules.
 * @returns a unique id.
 */
export declare function newStableId(prefix: 'g' | 'c'): string;
/**
 * Move `draggedId` to the current index of `targetId`.
 * @param ids - current order.
 * @param draggedId - id being dropped.
 * @param targetId - drop target id.
 * @returns a new ordered array, or the original order when ids are unknown.
 */
export declare function moveIdBefore(ids: readonly string[], draggedId: string, targetId: string): readonly string[];
/**
 * Session-scoped SOP capsules controller backing header and overlay entries.
 */
export declare class SopCapsulesSurface {
    private readonly listLibrary;
    private readonly getGroup;
    private readonly sessionId;
    private readonly mutate;
    /** Shared session view for inject hooks. */
    readonly state: SnapshotStore<SopCapsulesSessionView>;
    private disposed;
    private groupRequest;
    /**
     * @param listLibrary - Host `sopCapsules.listLibrary` for this session.
     * @param getGroup - Host `sopCapsules.getGroup` for this session.
     * @param sessionId - owning session id.
     * @param mutate - Host save/delete/reorder used by manage CRUD.
     */
    constructor(listLibrary: (sessionId: SessionId, signal?: AbortSignal) => Promise<RemoteResult<SopLibrarySummary>>, getGroup: (sessionId: SessionId, groupId: string, signal?: AbortSignal) => Promise<RemoteResult<SopCapsuleGroup>>, sessionId: SessionId, mutate: SopCapsulesMutateRemote);
    /** Start the first library read when the session has a workspace binding. */
    ensureLibrary(): void;
    /** Open the composer overlay panel for this session. */
    openPanel(): void;
    /** Close the composer overlay panel for this session. */
    closePanel(): void;
    /** Switch segmented panel mode. */
    setPanelMode(mode: SopCapsulesPanelMode): void;
    /** Select a group and load its capsules. */
    selectGroup(groupId: string): void;
    /** Update the pick-path title filter. */
    setSearchQuery(query: string): void;
    /** Update Replace/Append preference in session view. */
    setInjectMode(mode: 'replace' | 'append'): void;
    /** Dismiss the orphan-group informational banner. */
    dismissOrphanBanner(): void;
    /** Clear list-level error banner state. */
    dismissListError(): void;
    /** Retry loading the selected group after a Remote failure. */
    retryGroupLoad(): void;
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
    injectCapsule(body: string, readDraft: () => string, writeDraft: (text: string) => void, close: () => void, prepare?: () => Promise<void>): void;
    /** Open an empty new-group editor. */
    beginNewGroup(): void;
    /**
     * Open a rename editor for a group's displayName.
     * @param groupId - target group id.
     */
    beginRenameGroup(groupId: string): void;
    /** Open an empty new-capsule editor for the selected group. */
    beginNewCapsule(): void;
    /**
     * Open an edit editor for one capsule's title and body.
     * @param capsuleId - target capsule id in the selected group.
     */
    beginEditCapsule(capsuleId: string): void;
    /**
     * Update displayName in an open group editor.
     * @param value - next displayName.
     */
    setEditorDisplayName(value: string): void;
    /**
     * Update title in an open capsule editor.
     * @param value - next title.
     */
    setEditorTitle(value: string): void;
    /**
     * Update body in an open capsule editor.
     * @param value - next body.
     */
    setEditorBody(value: string): void;
    /** Close the editor without calling Remote. */
    cancelEditor(): void;
    /** Persist the open editor via `saveGroup`. On RemoteError the editor fields stay. */
    commitEditor(): void;
    /**
     * Open delete-group confirmation.
     * @param groupId - group to delete after confirm.
     */
    requestDeleteGroup(groupId: string): void;
    /**
     * Open delete-capsule confirmation.
     * @param capsuleId - capsule to delete after confirm.
     */
    requestDeleteCapsule(capsuleId: string): void;
    /** Dismiss the confirm dialog without mutating. */
    cancelConfirm(): void;
    /** Run the pending confirm after the user confirms. */
    confirmMutation(): void;
    /**
     * Parse a single-group yaml file and open the import confirm dialog.
     * @param filename - download or upload name; stem is the group-id.
     * @param raw - yaml document isomorphic with `groups/<group-id>.yaml`.
     */
    prepareImport(filename: string, raw: string): Promise<void>;
    /**
     * Serialize the selected group as `groups/<group-id>.yaml`.
     * @returns filename plus yaml body, or null when no group is selected or Remote fails.
     */
    exportSelectedGroup(): Promise<{
        readonly filename: string;
        readonly body: string;
    } | null>;
    /**
     * Persist a new group order covering every registered group-id.
     * @param groupIds - ordered ids.
     */
    reorderGroups(groupIds: readonly string[]): void;
    /**
     * Persist a new capsule order inside the selected group.
     * @param capsuleIds - ordered capsule ids covering the selected group.
     */
    reorderCapsules(capsuleIds: readonly string[]): void;
    /** Release the snapshot store listeners. */
    dispose(): void;
    private persistEditor;
    private persistDelete;
    private refreshLibrary;
    private loadGroup;
}
/** Per-session surface cache owned by the browser plugin apply body. */
export type SopCapsulesSurfaceMap = Map<SessionId, SopCapsulesSurface>;
/**
 * Resolve or create the surface for one session.
 * @param ctx - client root context carrying the remote namespace.
 * @param surfaces - session cache mutated by this helper.
 * @param sessionId - target session.
 * @returns the live surface for inject wiring.
 */
export declare function surfaceFor(ctx: ClientContext, surfaces: SopCapsulesSurfaceMap, sessionId: SessionId): SopCapsulesSurface;
//# sourceMappingURL=surface.d.ts.map