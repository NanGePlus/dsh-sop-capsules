/**
 * Filesystem persistence for the workspace SOP capsule library.
 */
import { type SopCapsuleGroup, type SopLibrarySummary } from './types.ts';
/**
 * List groups, registering orphan yaml files onto the manifest tail first.
 * @param libraryRoot - `.dsh/sop-capsules` directory.
 */
export declare function listLibrary(libraryRoot: string): Promise<SopLibrarySummary>;
/**
 * Load one group file.
 * @param libraryRoot - library root directory.
 * @param groupId - stable group id.
 */
export declare function getGroup(libraryRoot: string, groupId: string): Promise<SopCapsuleGroup>;
/**
 * Replace or create one group and register it on the manifest when new.
 * @param libraryRoot - library root directory.
 * @param group - full group payload.
 */
export declare function saveGroup(libraryRoot: string, group: SopCapsuleGroup): Promise<void>;
/**
 * Remove a group file and its manifest entry.
 * @param libraryRoot - library root directory.
 * @param groupId - stable group id.
 */
export declare function deleteGroup(libraryRoot: string, groupId: string): Promise<void>;
/**
 * Rewrite manifest group order.
 * @param libraryRoot - library root directory.
 * @param groupIds - complete ordered id list.
 */
export declare function reorderGroups(libraryRoot: string, groupIds: readonly string[]): Promise<void>;
//# sourceMappingURL=library-io.d.ts.map