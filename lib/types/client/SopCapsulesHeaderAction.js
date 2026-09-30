import { jsx as _jsx } from "react/jsx-runtime";
/** Session-header utility for the workspace SOP capsules panel. */
import { useEffect } from 'react';
import { IconListPenOutlineRegular, IconLoadingOutlineRegular, Tooltip, } from '@deepseek-ai/dsh-client-ui-primitives';
import css from './SopCapsulesHeaderAction.module.css';
/**
 * Icon control in the session header, left of the open-in-app button.
 * @param props - runtime slot currency, locale seat, and injected session verbs.
 * @returns the header action control.
 */
export function SopCapsulesHeaderAction({ sessionId, useWorkspaces, useSopCapsules, ensureLibrary, openPanel, t, }) {
    const hasWorkspace = useWorkspaces(state => state.items.some(workspace => workspace.sessionIds.includes(sessionId)));
    const libraryStatus = useSopCapsules(state => state.libraryStatus);
    const workspaceBlocked = !hasWorkspace || libraryStatus === 'no-workspace';
    const loading = hasWorkspace && libraryStatus === 'loading';
    useEffect(() => {
        if (!hasWorkspace)
            return;
        ensureLibrary();
    }, [hasWorkspace, ensureLibrary]);
    const tooltip = workspaceBlocked ? t('header.tooltip.noWorkspace') : t('header.aria');
    const onClick = () => {
        if (workspaceBlocked)
            return;
        openPanel();
    };
    const trigger = (_jsx("button", { type: "button", className: css.trigger, "aria-label": t('header.aria'), disabled: workspaceBlocked, onClick: onClick, children: loading
            ? (_jsx("span", { "data-sop-capsules-loading": "true", "aria-hidden": "true", children: _jsx(IconLoadingOutlineRegular, { size: 14, className: css.spinner }) }))
            : _jsx(IconListPenOutlineRegular, { size: 15, "aria-hidden": "true" }) }));
    return (_jsx("div", { className: css.root, "data-sop-capsules-header": "", children: _jsx(Tooltip, { label: tooltip, side: "bottom", delayMs: 400, children: workspaceBlocked
                ? (_jsx("span", { className: css.anchor, tabIndex: 0, children: trigger }))
                : trigger }) }));
}
//# sourceMappingURL=SopCapsulesHeaderAction.js.map