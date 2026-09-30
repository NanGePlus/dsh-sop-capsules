/**
 * Single-group yaml codec matching `groups/<group-id>.yaml`.
 * group-id lives in the filename, not the document body.
 */
import { parse, stringify } from 'yaml';
/**
 * Parse one group yaml document.
 * @param raw - yaml text from `groups/<group-id>.yaml` or an export file.
 * @param groupId - stable group id taken from the filename stem.
 * @returns the full group payload.
 */
export function parseGroupYaml(raw, groupId) {
    const value = parse(raw);
    if (typeof value !== 'object' || value === null)
        throw new TypeError(`invalid group ${groupId}`);
    const record = value;
    const displayName = record.displayName;
    const capsules = record.capsules;
    if (typeof displayName !== 'string' || displayName.length === 0) {
        throw new TypeError(`group ${groupId} missing displayName`);
    }
    if (!Array.isArray(capsules))
        throw new TypeError(`group ${groupId} missing capsules`);
    const parsed = capsules.map((entry, index) => {
        if (typeof entry !== 'object' || entry === null)
            throw new TypeError(`group ${groupId} capsule ${index}`);
        const row = entry;
        if (typeof row.id !== 'string' || typeof row.title !== 'string' || typeof row.body !== 'string') {
            throw new TypeError(`group ${groupId} capsule ${index} fields`);
        }
        return { id: row.id, title: row.title, body: row.body };
    });
    return { id: groupId, displayName, capsules: parsed };
}
/**
 * Serialize a group to the on-disk yaml document (no group-id field).
 * @param group - displayName and capsules to write.
 * @returns yaml text isomorphic with `groups/<group-id>.yaml`.
 */
export function stringifyGroupYaml(group) {
    const doc = {
        displayName: group.displayName,
        capsules: group.capsules.map(capsule => ({
            id: capsule.id,
            title: capsule.title,
            body: capsule.body,
        })),
    };
    return stringify(doc);
}
//# sourceMappingURL=group-yaml.js.map