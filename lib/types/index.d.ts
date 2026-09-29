/**
 * SOP capsules plugin, Host half: Typert Remote `sopCapsules` and workspace library IO.
 * @module @nangeagi/dsh-sop-capsules
 */
import type { Context } from '@deepseek-ai/cordis';
import type { SessionId } from '@deepseek-ai/dsh-session/types';
import { TypertRemoteService } from '@deepseek-ai/dsh-typert-protocol';
import type { SopCapsuleGroup, SopLibrarySummary } from './types.ts';
export type * from './types.ts';
declare module '@deepseek-ai/cordis' {
    interface Context {
        /** Host owner of the `sopCapsules` Remote namespace. */
        sopCapsules: SopCapsulesService;
    }
}
/** Host Remote service for workspace SOP capsule library persistence. */
export declare class SopCapsulesService extends TypertRemoteService {
    static inject: readonly ["sessions", "workspaceRegistry", "sessionPersistence"];
    /**
     * @param ctx - Host context carrying sessions and workspace registry.
     */
    constructor(ctx: Context);
    /**
     * List registered groups for the session workspace library.
     * @param sessionId - Session whose workspace entity selects the library root.
     * @param signal - caller cancellation.
     */
    listLibrary(sessionId: SessionId, signal: AbortSignal): Promise<SopLibrarySummary>;
    /**
     * Load one group yaml.
     * @param sessionId - Session whose workspace entity selects the library root.
     * @param groupId - stable group id.
     * @param signal - caller cancellation.
     */
    getGroup(sessionId: SessionId, groupId: string, signal: AbortSignal): Promise<SopCapsuleGroup>;
    /**
     * Create or replace one group and register new ids on the manifest.
     * @param sessionId - Session whose workspace entity selects the library root.
     * @param group - full group payload.
     * @param signal - caller cancellation.
     */
    saveGroup(sessionId: SessionId, group: SopCapsuleGroup, signal: AbortSignal): Promise<void>;
    /**
     * Delete one group file and remove it from the manifest.
     * @param sessionId - Session whose workspace entity selects the library root.
     * @param groupId - stable group id.
     * @param signal - caller cancellation.
     */
    deleteGroup(sessionId: SessionId, groupId: string, signal: AbortSignal): Promise<void>;
    /**
     * Replace manifest group order.
     * @param sessionId - Session whose workspace entity selects the library root.
     * @param groupIds - ordered ids covering every registered group.
     * @param signal - caller cancellation.
     */
    reorderGroups(sessionId: SessionId, groupIds: readonly string[], signal: AbortSignal): Promise<void>;
}
export default SopCapsulesService;
//# sourceMappingURL=index.d.ts.map