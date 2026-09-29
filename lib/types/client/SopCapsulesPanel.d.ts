import type { SopCapsulesPanelProps } from './slots.ts';
/**
 * SOP capsules overlay: pick path (list, search, inject) and manage path (CRUD, reorder, import/export).
 * @param props - overlay slot currency and injected verbs.
 * @returns the panel while open, otherwise null.
 */
export declare function SopCapsulesPanel({ sessionId, useWorkspaces, useSopCapsules, closePanel, selectGroup, setSearchQuery, setInjectMode, injectCapsule, setPanelMode, ensureLibrary, dismissListError, retryGroupLoad, beginNewGroup, beginRenameGroup, beginNewCapsule, beginEditCapsule, setEditorDisplayName, setEditorTitle, setEditorBody, commitEditor, cancelEditor, requestDeleteGroup, requestDeleteCapsule, cancelConfirm, confirmMutation, reorderGroups, reorderCapsules, exportSelectedGroup, prepareImport, dismissOrphanBanner, t, }: SopCapsulesPanelProps): import("react").JSX.Element | null;
//# sourceMappingURL=SopCapsulesPanel.d.ts.map