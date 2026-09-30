/**
 * Single-group yaml codec matching `groups/<group-id>.yaml`.
 * group-id lives in the filename, not the document body.
 */
import type { SopCapsuleGroup } from './types.ts';
/**
 * Parse one group yaml document.
 * @param raw - yaml text from `groups/<group-id>.yaml` or an export file.
 * @param groupId - stable group id taken from the filename stem.
 * @returns the full group payload.
 */
export declare function parseGroupYaml(raw: string, groupId: string): SopCapsuleGroup;
/**
 * Serialize a group to the on-disk yaml document (no group-id field).
 * @param group - displayName and capsules to write.
 * @returns yaml text isomorphic with `groups/<group-id>.yaml`.
 */
export declare function stringifyGroupYaml(group: Pick<SopCapsuleGroup, 'displayName' | 'capsules'>): string;
//# sourceMappingURL=group-yaml.d.ts.map