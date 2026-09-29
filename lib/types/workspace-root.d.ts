/**
 * Resolve `.dsh/sop-capsules/` from a Session id via workspace entity membership.
 */
import type { Context } from '@deepseek-ai/cordis';
import type { SessionId } from '@deepseek-ai/dsh-session/types';
import { RemoteError } from '@deepseek-ai/dsh-typert-protocol';
/** Thrown when the session is not bound to a workspace entity. */
export declare function noWorkspaceError(): RemoteError;
/**
 * Locate the library root directory for a Session.
 * @param ctx - Host context with sessions and workspace registry.
 * @param sessionId - wire Session identity.
 * @returns absolute path to `.dsh/sop-capsules/` under the workspace root.
 */
export declare function resolveLibraryRoot(ctx: Context, sessionId: SessionId): Promise<string>;
//# sourceMappingURL=workspace-root.d.ts.map