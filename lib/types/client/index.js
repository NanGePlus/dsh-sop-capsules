import sopCapsulesRemote from '@nangeagi/dsh-sop-capsules/remote';
import { SopCapsulesHeaderAction } from "./SopCapsulesHeaderAction.js";
import { SopCapsulesPanel } from "./SopCapsulesPanel.js";
import { en, NS, zh } from "./locales.js";
import { bindSlashRefDecoration, loadSlashSpellings, refreshSlashRefDecoration } from "./slash-refs.js";
import { surfaceFor } from "./surface.js";
/**
 * Loader-level inject cannot include `remote.sopCapsules`: that service exists
 * only after this plugin `$mount`s the generated `./remote` contribution.
 * Official Client remotes are mounted by `dsh-api-remotes`; a tree-outside
 * plugin mounts its own namespace (same pattern as experimental Agent Teams).
 * `remote.commands` and `remote.skills` are declared on the UI fiber below:
 * reading them without inject throws, and the slash catalog stays empty.
 */
export const inject = [
    'slots',
    'locale',
    'remote',
    'sessions',
    'conversation',
];
/**
 * Register locale dictionaries, header utility, and overlay after `remote.sopCapsules` exists.
 * @param ctx - client context that can read `remote.sopCapsules`.
 */
function registerUi(ctx) {
    ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'sop-capsules: dictionaries');
    const surfaces = new Map();
    ctx.effect(() => () => {
        for (const surface of surfaces.values())
            surface.dispose();
        surfaces.clear();
    }, 'sop-capsules: per-session surfaces');
    ctx.slots.inject('conversation.session.header.utilities', () => ctx.slots.register({
        name: 'conversation.session.header.utilities',
        id: 'sop-capsules',
        // Immediately before the open-in-app split button (order -10).
        order: -20,
        locale: NS,
        inject: (sessionId) => {
            const surface = surfaceFor(ctx, surfaces, sessionId);
            return {
                hooks: { sopCapsules: surface.state },
                ensureLibrary: () => { surface.ensureLibrary(); },
                openPanel: () => { surface.openPanel(); },
            };
        },
    }, SopCapsulesHeaderAction));
    ctx.slots.inject('conversation.input.overlay', () => ctx.slots.register({
        name: 'conversation.input.overlay',
        id: 'sop-capsules-panel',
        order: 10,
        locale: NS,
        inject: (sessionId) => {
            const surface = surfaceFor(ctx, surfaces, sessionId);
            const sessions = ctx.sessions;
            const inputForSession = () => {
                const scope = sessions.scope(sessionId);
                return scope === undefined ? undefined : ctx.conversation.input.for(scope);
            };
            return {
                hooks: { sopCapsules: surface.state },
                closePanel: () => { surface.closePanel(); },
                readDraft: () => inputForSession()?.state.getSnapshot().draft ?? '',
                writeDraft: (text) => { inputForSession()?.setDraft(text); },
                selectGroup: (groupId) => { surface.selectGroup(groupId); },
                setSearchQuery: (query) => { surface.setSearchQuery(query); },
                setInjectMode: (mode) => { surface.setInjectMode(mode); },
                setPanelMode: (mode) => { surface.setPanelMode(mode); },
                ensureLibrary: () => { surface.ensureLibrary(); },
                dismissListError: () => { surface.dismissListError(); },
                retryGroupLoad: () => { surface.retryGroupLoad(); },
                beginNewGroup: () => { surface.beginNewGroup(); },
                beginRenameGroup: (groupId) => { surface.beginRenameGroup(groupId); },
                beginNewCapsule: () => { surface.beginNewCapsule(); },
                beginEditCapsule: (capsuleId) => { surface.beginEditCapsule(capsuleId); },
                setEditorDisplayName: (value) => { surface.setEditorDisplayName(value); },
                setEditorTitle: (value) => { surface.setEditorTitle(value); },
                setEditorBody: (value) => { surface.setEditorBody(value); },
                commitEditor: () => { surface.commitEditor(); },
                cancelEditor: () => { surface.cancelEditor(); },
                requestDeleteGroup: (groupId) => { surface.requestDeleteGroup(groupId); },
                requestDeleteCapsule: (capsuleId) => { surface.requestDeleteCapsule(capsuleId); },
                cancelConfirm: () => { surface.cancelConfirm(); },
                confirmMutation: () => { surface.confirmMutation(); },
                reorderGroups: (groupIds) => { surface.reorderGroups(groupIds); },
                reorderCapsules: (capsuleIds) => { surface.reorderCapsules(capsuleIds); },
                exportSelectedGroup: () => surface.exportSelectedGroup(),
                prepareImport: (filename, raw) => surface.prepareImport(filename, raw),
                dismissOrphanBanner: () => { surface.dismissOrphanBanner(); },
                injectCapsule: (body) => {
                    const input = inputForSession();
                    const remote = ctx.remote;
                    const commandToken = ctx.locale.bind('command');
                    surface.injectCapsule(body, () => input?.state.getSnapshot().draft ?? '', (text) => {
                        input?.setDraft(text);
                        refreshSlashRefDecoration(input);
                    }, () => { surface.closePanel(); }, async () => {
                        const spellings = await loadSlashSpellings(remote, sessionId, (name) => commandToken(`token.${name}`));
                        bindSlashRefDecoration(input, spellings);
                    });
                },
            };
        },
    }, SopCapsulesPanel));
}
/**
 * Mount the generated `sopCapsules` Remote contribution, then register UI.
 * @param ctx - client root carrying `remote`.
 * @param contribution - generated Typert Remote descriptors for this package.
 * @returns disposer for UI fiber then Remote namespace.
 */
export async function mountSopCapsulesUi(ctx, contribution) {
    const disposeRemote = await ctx.remote.$mount(contribution);
    const ui = ctx.inject(['slots', 'locale', 'remote.sopCapsules', 'remote.commands', 'remote.skills', 'sessions', 'conversation'], registerUi);
    try {
        await ui;
    }
    catch (error) {
        await ui.dispose();
        await disposeRemote();
        throw error;
    }
    return async () => {
        await ui.dispose();
        await disposeRemote();
    };
}
/**
 * Client plugin body: mount `./remote`, then header + overlay.
 * @param ctx - client root context.
 * @returns disposer for UI and Remote namespace.
 */
export async function apply(ctx) {
    return await mountSopCapsulesUi(ctx, sopCapsulesRemote);
}
//# sourceMappingURL=index.js.map