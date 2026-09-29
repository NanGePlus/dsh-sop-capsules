/**
 * SOP capsules plugin, browser half: session-header utility, composer overlay
 * pick/manage/import/export, locale registration, and per-session library load gating.
 */
import type { Context as ClientContext } from '@deepseek-ai/cordis';
import type { TypertRemoteContribution } from '@deepseek-ai/dsh-typert-protocol';
import { type SopCapsulesKey } from './locales.ts';
declare module '@deepseek-ai/dsh-client-ui-slots' {
    interface LocaleNamespaceMap {
        /** Workspace SOP capsule library copy. */
        'sop-capsules': SopCapsulesKey;
    }
}
/**
 * Loader-level inject cannot include `remote.sopCapsules`: that service exists
 * only after this plugin `$mount`s the generated `./remote` contribution.
 * Official Client remotes are mounted by `dsh-api-remotes`; a tree-outside
 * plugin mounts its own namespace (same pattern as experimental Agent Teams).
 * `remote.commands` and `remote.skills` are declared on the UI fiber below:
 * reading them without inject throws, and the slash catalog stays empty.
 */
export declare const inject: readonly ["slots", "locale", "remote", "sessions", "conversation"];
/**
 * Mount the generated `sopCapsules` Remote contribution, then register UI.
 * @param ctx - client root carrying `remote`.
 * @param contribution - generated Typert Remote descriptors for this package.
 * @returns disposer for UI fiber then Remote namespace.
 */
export declare function mountSopCapsulesUi(ctx: ClientContext, contribution: TypertRemoteContribution): Promise<() => Promise<void>>;
/**
 * Client plugin body: mount `./remote`, then header + overlay.
 * @param ctx - client root context.
 * @returns disposer for UI and Remote namespace.
 */
export declare function apply(ctx: ClientContext): Promise<() => Promise<void>>;
//# sourceMappingURL=index.d.ts.map