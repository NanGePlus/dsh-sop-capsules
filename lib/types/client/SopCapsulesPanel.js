import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/** Composer overlay for SOP capsules pick, manage, import, and export. */
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { IconCloseOutlineRegular, IconEditOutlineRegular, IconSearchOutlineRegular, IconTrashOutlineRegular, Input, Modal, Tooltip, } from '@deepseek-ai/dsh-client-ui-primitives';
import { injectModeStorageKey, moveIdBefore } from "./surface.js";
import css from './SopCapsulesPanel.module.css';
/**
 * Filter capsule titles within the selected group.
 * @param titles - capsule rows.
 * @param query - case-insensitive substring filter.
 * @returns visible rows.
 */
function filterCapsules(titles, query) {
    const needle = query.trim().toLowerCase();
    if (needle === '')
        return titles;
    return titles.filter(row => row.title.toLowerCase().includes(needle));
}
/**
 * Resolve the workspace id bound to one session, if any.
 * @param sessionId - target session.
 * @param useWorkspaces - workspace catalog hook.
 * @returns workspace id or undefined.
 */
function workspaceForSession(sessionId, useWorkspaces) {
    const items = useWorkspaces(state => state.items);
    return items.find(item => item.sessionIds.includes(sessionId))?.workspaceId;
}
function dndPayload(kind, id) {
    return `${kind}:${id}`;
}
function parseDndPayload(raw) {
    const split = raw.indexOf(':');
    if (split <= 0)
        return null;
    const kind = raw.slice(0, split);
    const id = raw.slice(split + 1);
    if ((kind !== 'group' && kind !== 'capsule') || id === '')
        return null;
    return { kind, id };
}
/** Design cap for the panel body; runtime clamp uses space above the composer. */
const PANEL_MAX_HEIGHT = 480;
/**
 * Outer floor for a short library. Twice the one-capsule panel (171px).
 * The runtime clamp still wins when the space above the composer is shorter.
 */
const PANEL_MIN_HEIGHT = 342;
/** Gap kept between the panel and the top of the clipping conversation column. */
const PANEL_TOP_MARGIN = 12;
/**
 * Top of the space the panel may occupy: the lowest clipping ancestor, else the viewport.
 * The conversation scroll body clips this overlay, so a viewport-only clamp still hides the header.
 * @param el - the bottom-anchored shell.
 * @returns the y coordinate the panel top must stay below.
 */
function panelCeiling(el) {
    let ceiling = PANEL_TOP_MARGIN;
    let node = el.parentElement;
    while (node !== null && node !== document.body && node !== document.documentElement) {
        const overflowY = getComputedStyle(node).overflowY;
        if (overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'hidden' || overflowY === 'clip') {
            ceiling = Math.max(ceiling, node.getBoundingClientRect().top + PANEL_TOP_MARGIN);
        }
        node = node.parentElement;
    }
    return ceiling;
}
/** Gap kept between a revealed editor or confirm and the list's bottom edge. */
const REVEAL_PAD = 8;
/**
 * Scroll a panel list so an editor or confirm that hangs under its row is fully inside that list.
 * Absolute popovers do not extend the list's scroll range, so the list grows padding-bottom until the bottom edge clears.
 * @param node - open editor or confirm.
 * @param scrollers - the group list and the capsule list.
 */
function revealInPanelScroller(node, scrollers) {
    const scroller = scrollers.find(item => item.contains(node));
    if (scroller === undefined)
        return;
    const box = scroller.getBoundingClientRect();
    const rect = node.getBoundingClientRect();
    if (rect.height === 0 || box.height === 0)
        return;
    const overflow = rect.bottom - (box.bottom - REVEAL_PAD);
    if (overflow <= 1)
        return;
    const room = scroller.scrollHeight - scroller.clientHeight - scroller.scrollTop;
    if (room + 1 < overflow) {
        const current = Number.parseFloat(scroller.style.paddingBottom) || 0;
        scroller.style.paddingBottom = `${current + (overflow - room)}px`;
    }
    scroller.scrollTop += overflow;
}
/** True when this box can still scroll in the wheel direction. */
function consumesWheel(node, deltaX, deltaY) {
    const style = getComputedStyle(node);
    if (deltaY !== 0 && /(auto|scroll)/.test(style.overflowY)) {
        const max = node.scrollHeight - node.clientHeight;
        if (max > 1 && ((deltaY < 0 && node.scrollTop > 0) || (deltaY > 0 && node.scrollTop < max - 1)))
            return true;
    }
    if (deltaX !== 0 && /(auto|scroll)/.test(style.overflowX)) {
        const max = node.scrollWidth - node.clientWidth;
        if (max > 1 && ((deltaX < 0 && node.scrollLeft > 0) || (deltaX > 0 && node.scrollLeft < max - 1)))
            return true;
    }
    return false;
}
function GroupNamePopover({ displayName, submitting, setEditorDisplayName, commitEditor, cancelEditor, t, }) {
    return (_jsxs("form", { className: css.groupPopover, "data-sop-reveal": "", draggable: false, onDragStart: event => {
            event.preventDefault();
            event.stopPropagation();
        }, onSubmit: event => {
            event.preventDefault();
            commitEditor();
        }, children: [_jsxs("label", { className: css.field, children: [_jsx("span", { className: css.fieldLabel, children: t('panel.manage.displayName') }), _jsx(Input, { "aria-label": t('panel.manage.displayName'), value: displayName, onChange: event => { setEditorDisplayName(event.target.value); } })] }), _jsxs("div", { className: css.editorActions, children: [_jsx("button", { type: "submit", className: css.primaryBtn, disabled: submitting, children: t('panel.manage.save') }), _jsx("button", { type: "button", className: css.secondaryBtn, onClick: () => { cancelEditor(); }, children: t('panel.manage.cancel') })] })] }));
}
/**
 * Trigger a browser download of a text file.
 * @param filename - suggested download name (`<group-id>.yaml`).
 * @param body - file contents.
 */
function ConfirmPopover({ title, body, actionLabel, submitting, confirmMutation, cancelConfirm, t, }) {
    return (_jsxs("div", { className: css.groupPopover, role: "dialog", "aria-label": title, "data-sop-reveal": "", children: [_jsx("p", { className: css.confirmTitle, children: title }), _jsx("p", { className: css.confirmBody, children: body }), _jsxs("div", { className: css.editorActions, children: [_jsx("button", { type: "button", className: css.secondaryBtn, disabled: submitting, onClick: () => { cancelConfirm(); }, children: t('panel.manage.cancel') }), _jsx("button", { type: "button", className: css.primaryBtn, disabled: submitting, "aria-busy": submitting, "aria-label": submitting ? t('panel.manage.submitting') : actionLabel, onClick: () => { confirmMutation(); }, children: submitting ? t('panel.manage.submitting') : actionLabel })] })] }));
}
function CapsuleEditorForm({ title, body, submitting, reveal, setEditorTitle, setEditorBody, commitEditor, cancelEditor, t, }) {
    return (_jsxs("form", { className: css.editor, "data-sop-reveal": reveal ? '' : undefined, draggable: false, onDragStart: event => {
            event.preventDefault();
            event.stopPropagation();
        }, onSubmit: event => {
            event.preventDefault();
            commitEditor();
        }, children: [_jsxs("label", { className: css.field, children: [_jsx("span", { className: css.fieldLabel, children: t('panel.manage.capsuleTitle') }), _jsx(Input, { "aria-label": t('panel.manage.capsuleTitle'), value: title, onChange: event => { setEditorTitle(event.target.value); } })] }), _jsxs("label", { className: css.field, children: [_jsx("span", { className: css.fieldLabel, children: t('panel.manage.capsuleBody') }), _jsx("textarea", { className: css.bodyInput, "aria-label": t('panel.manage.capsuleBody'), value: body, rows: 4, onChange: event => { setEditorBody(event.target.value); } })] }), _jsxs("div", { className: css.editorActions, children: [_jsx("button", { type: "submit", className: css.primaryBtn, disabled: submitting, children: t('panel.manage.save') }), _jsx("button", { type: "button", className: css.secondaryBtn, onClick: () => { cancelEditor(); }, children: t('panel.manage.cancel') })] })] }));
}
function downloadTextFile(filename, body) {
    const blob = new Blob([body], { type: 'text/yaml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
}
/**
 * SOP capsules overlay: pick path (list, search, inject) and manage path (CRUD, reorder, import/export).
 * @param props - overlay slot currency and injected verbs.
 * @returns the panel while open, otherwise null.
 */
export function SopCapsulesPanel({ sessionId, useWorkspaces, useSopCapsules, closePanel, selectGroup, setSearchQuery, setInjectMode, injectCapsule, setPanelMode, ensureLibrary, dismissListError, retryGroupLoad, beginNewGroup, beginRenameGroup, beginNewCapsule, beginEditCapsule, setEditorDisplayName, setEditorTitle, setEditorBody, commitEditor, cancelEditor, requestDeleteGroup, requestDeleteCapsule, cancelConfirm, confirmMutation, reorderGroups, reorderCapsules, exportSelectedGroup, prepareImport, dismissOrphanBanner, t, }) {
    const view = useSopCapsules(state => state);
    const workspaceId = workspaceForSession(sessionId, useWorkspaces);
    const importInput = useRef(null);
    const shellRef = useRef(null);
    const sidebarRef = useRef(null);
    const contentScrollRef = useRef(null);
    const [panelMaxHeight, setPanelMaxHeight] = useState(PANEL_MAX_HEIGHT);
    useLayoutEffect(() => {
        const shell = shellRef.current;
        if (shell === null)
            return;
        const fit = () => {
            const room = shell.getBoundingClientRect().bottom - panelCeiling(shell);
            setPanelMaxHeight(Math.min(PANEL_MAX_HEIGHT, Math.max(0, room)));
        };
        fit();
        const Observer = globalThis.ResizeObserver;
        const observer = Observer === undefined ? null : new Observer(fit);
        if (observer !== null) {
            observer.observe(shell);
            let node = shell.parentElement;
            while (node !== null) {
                observer.observe(node);
                node = node.parentElement;
            }
        }
        window.addEventListener('resize', fit);
        window.addEventListener('scroll', fit, true);
        return () => {
            observer?.disconnect();
            window.removeEventListener('resize', fit);
            window.removeEventListener('scroll', fit, true);
        };
    }, [view.panelOpen]);
    useEffect(() => {
        if (!view.panelOpen)
            return;
        ensureLibrary();
    }, [ensureLibrary, view.panelOpen]);
    useEffect(() => {
        const elements = [sidebarRef.current, contentScrollRef.current].filter(el => el !== null);
        const timers = new Map();
        const cleanups = elements.map(el => {
            const onScroll = () => {
                el.dataset.scrolling = '';
                window.clearTimeout(timers.get(el));
                timers.set(el, window.setTimeout(() => {
                    delete el.dataset.scrolling;
                }, 800));
            };
            el.addEventListener('scroll', onScroll, { passive: true });
            return () => {
                window.clearTimeout(timers.get(el));
                el.removeEventListener('scroll', onScroll);
            };
        });
        return () => {
            for (const cleanup of cleanups)
                cleanup();
        };
    }, [view.panelOpen, view.libraryStatus]);
    useEffect(() => {
        const shell = shellRef.current;
        if (shell === null)
            return;
        const onWheel = (event) => {
            let node = event.target instanceof Element ? event.target : null;
            while (node !== null && node !== shell) {
                if (node instanceof HTMLElement && consumesWheel(node, event.deltaX, event.deltaY))
                    return;
                node = node.parentElement;
            }
            event.preventDefault();
        };
        shell.addEventListener('wheel', onWheel, { passive: false });
        return () => { shell.removeEventListener('wheel', onWheel); };
    }, [view.panelOpen]);
    useEffect(() => {
        if (!view.panelOpen || workspaceId === undefined)
            return;
        const stored = localStorage.getItem(injectModeStorageKey(workspaceId));
        if (stored === 'replace' || stored === 'append')
            setInjectMode(stored);
    }, [setInjectMode, view.panelOpen, workspaceId]);
    const [pendingInject, setPendingInject] = useState(null);
    useLayoutEffect(() => {
        if (view.editor.kind !== 'capsule-new')
            return;
        const scroller = contentScrollRef.current;
        if (scroller === null)
            return;
        scroller.scrollTop = 0;
    }, [view.editor.kind]);
    const revealGroupId = view.editor.kind === 'group-rename' ? view.editor.groupId : '';
    const revealCapsuleId = view.editor.kind === 'capsule-edit' ? view.editor.capsuleId : '';
    const revealConfirmId = view.confirm?.kind === 'delete-group'
        ? view.confirm.groupId
        : view.confirm?.kind === 'delete-capsule'
            ? view.confirm.capsuleId
            : '';
    useLayoutEffect(() => {
        const scrollers = [sidebarRef.current, contentScrollRef.current].filter(el => el !== null);
        for (const scroller of scrollers)
            scroller.style.paddingBottom = '';
        const shell = shellRef.current;
        if (shell === null)
            return;
        for (const node of shell.querySelectorAll('[data-sop-reveal]')) {
            if (node instanceof HTMLElement)
                revealInPanelScroller(node, scrollers);
        }
    }, [view.editor.kind, revealGroupId, revealCapsuleId, view.confirm?.kind, revealConfirmId, pendingInject?.id]);
    useEffect(() => {
        if (!view.panelOpen)
            setPendingInject(null);
    }, [view.panelOpen]);
    const visibleCapsules = useMemo(() => filterCapsules(view.capsules, view.searchQuery), [view.capsules, view.searchQuery]);
    if (!view.panelOpen)
        return null;
    const pickMode = view.panelMode === 'pick';
    const noWorkspace = view.libraryStatus === 'no-workspace';
    const submitting = view.mutationStatus === 'submitting';
    const editor = view.editor;
    const confirm = view.confirm;
    return (_jsxs("div", { ref: shellRef, className: css.shell, "data-sop-capsules-panel": "", "data-trigger-menu": "", children: [_jsxs("section", { className: css.panel, "aria-label": t('panel.title'), style: { maxHeight: panelMaxHeight, minHeight: Math.min(PANEL_MIN_HEIGHT, panelMaxHeight) }, children: [_jsxs("header", { className: css.header, children: [_jsx("h2", { className: css.title, children: t('panel.title') }), _jsxs("div", { className: css.modeSwitch, role: "tablist", "aria-label": t('panel.title'), children: [_jsx("button", { type: "button", role: "tab", className: pickMode ? css.modeActive : css.modeIdle, "aria-selected": pickMode, onClick: () => { setPanelMode('pick'); }, children: t('panel.mode.pick') }), _jsx("button", { type: "button", role: "tab", className: !pickMode ? css.modeActive : css.modeIdle, "aria-selected": !pickMode, onClick: () => { setPanelMode('manage'); }, children: t('panel.mode.manage') })] }), _jsx("button", { type: "button", className: css.close, "aria-label": t('panel.close'), onClick: () => { closePanel(); }, children: _jsx(IconCloseOutlineRegular, { size: 14, "aria-hidden": "true" }) })] }), view.listError !== null && (_jsxs("div", { className: css.bannerError, role: "alert", children: [_jsx("span", { children: view.listError }), _jsx("button", { type: "button", className: css.bannerAction, onClick: () => { dismissListError(); ensureLibrary(); }, children: t('panel.error.retry') })] })), view.orphanBanner && (_jsxs("div", { className: css.bannerInfo, role: "status", children: [_jsx("span", { children: t('panel.banner.orphan') }), _jsx("button", { type: "button", className: css.bannerAction, onClick: () => { dismissOrphanBanner(); }, children: t('panel.banner.orphan.dismiss') })] })), view.mutationError !== null && (_jsx("div", { className: css.bannerError, role: "alert", children: _jsx("span", { children: view.mutationError }) })), noWorkspace ? (_jsxs("div", { className: css.noWorkspace, children: [_jsx("p", { children: t('panel.noWorkspace.body') }), _jsx("button", { type: "button", className: css.secondaryBtn, onClick: () => { closePanel(); }, children: t('panel.close') })] })) : (_jsxs("div", { className: css.body, children: [_jsxs("nav", { className: css.sidebar, "aria-label": pickMode ? t('panel.mode.pick') : t('panel.mode.manage'), children: [_jsxs("div", { className: css.sidebarHeader, children: [_jsx("h3", { className: css.sidebarTitle, children: t('panel.manage.groupHeading') }), !pickMode && (_jsxs("div", { className: css.popoverAnchor, children: [_jsx("button", { type: "button", className: css.sidebarAction, onClick: () => { beginNewGroup(); }, children: t('panel.manage.newGroup') }), editor.kind === 'group-new' && (_jsx(GroupNamePopover, { displayName: editor.displayName, submitting: submitting, setEditorDisplayName: setEditorDisplayName, commitEditor: commitEditor, cancelEditor: cancelEditor, t: t }))] }))] }), _jsx("div", { ref: sidebarRef, className: css.groupList, children: view.groups.map(group => (_jsxs("div", { className: css.groupRow, "data-selected": group.id === view.selectedGroupId ? '' : undefined, "data-confirm": confirm?.kind === 'delete-group' && confirm.groupId === group.id ? '' : undefined, onDragOver: event => {
                                                if (pickMode)
                                                    return;
                                                event.preventDefault();
                                            }, onDrop: event => {
                                                if (pickMode)
                                                    return;
                                                event.preventDefault();
                                                const payload = parseDndPayload(event.dataTransfer.getData('text/plain'));
                                                if (payload === null || payload.kind !== 'group')
                                                    return;
                                                reorderGroups(moveIdBefore(view.groups.map(row => row.id), payload.id, group.id));
                                            }, children: [!pickMode && (_jsx("span", { className: css.dragHandle, draggable: true, "aria-label": t('panel.manage.drag.group'), onDragStart: event => {
                                                        event.stopPropagation();
                                                        event.dataTransfer.setData('text/plain', dndPayload('group', group.id));
                                                        event.dataTransfer.effectAllowed = 'move';
                                                    }, children: "\u22EE\u22EE" })), _jsx("button", { type: "button", className: group.id === view.selectedGroupId ? css.groupActive : css.groupItem, "aria-current": group.id === view.selectedGroupId ? 'true' : undefined, onClick: () => { selectGroup(group.id); }, children: group.displayName }), !pickMode && (_jsxs("span", { className: css.rowActions, children: [_jsx(Tooltip, { label: t('panel.manage.renameGroup'), side: "top", delayMs: 400, children: _jsx("button", { type: "button", className: css.iconButton, "aria-label": t('panel.manage.renameGroup'), onClick: () => { beginRenameGroup(group.id); }, children: _jsx(IconEditOutlineRegular, { size: 12, "aria-hidden": "true" }) }) }), _jsx(Tooltip, { label: t('panel.manage.deleteGroup'), side: "top", delayMs: 400, children: _jsx("button", { type: "button", className: css.iconButton, "aria-label": t('panel.manage.deleteGroup'), onClick: () => { requestDeleteGroup(group.id); }, children: _jsx(IconTrashOutlineRegular, { size: 12, "aria-hidden": "true" }) }) })] })), confirm?.kind === 'delete-group' && confirm.groupId === group.id && (_jsx(ConfirmPopover, { title: t('panel.manage.confirm.deleteGroup.title'), body: t('panel.manage.confirm.deleteGroup.body'), actionLabel: t('panel.manage.confirm.action'), submitting: submitting, confirmMutation: confirmMutation, cancelConfirm: cancelConfirm, t: t })), editor.kind === 'group-rename' && editor.groupId === group.id && (_jsx(GroupNamePopover, { displayName: editor.displayName, submitting: submitting, setEditorDisplayName: setEditorDisplayName, commitEditor: commitEditor, cancelEditor: cancelEditor, t: t }))] }, group.id))) })] }), _jsxs("div", { className: css.content, children: [view.groupError !== null && (_jsxs("div", { className: css.bannerError, role: "alert", children: [_jsx("span", { children: view.groupError }), _jsx("button", { type: "button", className: css.bannerAction, onClick: () => { retryGroupLoad(); }, children: t('panel.error.retry') })] })), pickMode ? (_jsx("div", { className: css.toolbar, children: _jsx(Input, { className: `${css.search} ${css.searchPick}`, role: "searchbox", "aria-label": t('panel.search.aria'), placeholder: t('panel.search.placeholder'), icon: _jsx(IconSearchOutlineRegular, { size: 16, "aria-hidden": "true" }), value: view.searchQuery, onChange: event => { setSearchQuery(event.target.value); } }) })) : (_jsxs("div", { className: css.toolbar, children: [_jsx(Input, { className: css.search, role: "searchbox", "aria-label": t('panel.search.aria'), placeholder: t('panel.search.placeholder'), icon: _jsx(IconSearchOutlineRegular, { size: 16, "aria-hidden": "true" }), value: view.searchQuery, onChange: event => { setSearchQuery(event.target.value); } }), _jsx("button", { type: "button", className: css.toolbarAction, onClick: () => { beginNewCapsule(); }, children: t('panel.manage.newCapsule') }), _jsx("button", { type: "button", className: css.toolbarAction, onClick: () => {
                                                    void exportSelectedGroup().then((file) => {
                                                        if (file !== null)
                                                            downloadTextFile(file.filename, file.body);
                                                    });
                                                }, children: t('panel.manage.exportGroup') }), _jsx("input", { ref: importInput, type: "file", accept: ".yaml,.yml,text/yaml,application/yaml", className: css.fileInput, "aria-label": t('panel.manage.importGroup'), onChange: event => {
                                                    const file = event.target.files?.[0];
                                                    event.target.value = '';
                                                    if (file === undefined)
                                                        return;
                                                    void file.text().then(raw => prepareImport(file.name, raw));
                                                } }), _jsx("button", { type: "button", className: css.toolbarAction, onClick: () => { importInput.current?.click(); }, children: t('panel.manage.importGroup') })] })), _jsxs("div", { ref: contentScrollRef, className: css.contentScroll, children: [editor.kind === 'capsule-new' && (_jsx(CapsuleEditorForm, { title: editor.title, body: editor.body, submitting: submitting, reveal: false, setEditorTitle: setEditorTitle, setEditorBody: setEditorBody, commitEditor: commitEditor, cancelEditor: cancelEditor, t: t })), view.groupStatus === 'loading' ? (_jsx("div", { className: css.skeletonList, "data-sop-capsules-skeleton": "true", "aria-busy": "true", children: [0, 1, 2].map(key => (_jsx("div", { className: css.skeletonRow }, key))) })) : visibleCapsules.length === 0 ? (_jsx("p", { className: css.empty, children: pickMode
                                                    ? (view.searchQuery.trim() === '' ? t('panel.empty.group') : t('panel.empty.search'))
                                                    : t('panel.empty.manage') })) : pickMode ? (_jsx("ul", { className: css.capsuleList, children: visibleCapsules.map(capsule => (_jsxs("li", { className: css.popoverAnchor, children: [_jsxs("button", { type: "button", className: css.capsuleRow, disabled: view.injecting, onClick: () => {
                                                                setPendingInject({ id: capsule.id, body: capsule.body });
                                                            }, children: [_jsx("span", { className: css.capsuleTitle, children: capsule.title }), capsule.body.trim() !== '' && (_jsx("span", { className: css.capsulePreview, children: capsule.body }))] }), pendingInject?.id === capsule.id && (_jsxs("div", { className: `${css.groupPopover} ${css.injectPopover}`, role: "dialog", "aria-label": t('panel.inject.confirm.title'), "data-sop-reveal": "", children: [_jsx("p", { className: css.confirmTitle, children: t('panel.inject.confirm.title') }), _jsx("p", { className: css.confirmBody, children: t('panel.inject.confirm.body') }), _jsxs("div", { className: css.editorActions, children: [_jsx("button", { type: "button", className: css.secondaryBtn, disabled: view.injecting, onClick: () => { setPendingInject(null); }, children: t('panel.manage.cancel') }), _jsx("button", { type: "button", className: css.secondaryBtn, disabled: view.injecting, onClick: () => {
                                                                                setInjectMode('append');
                                                                                if (workspaceId !== undefined)
                                                                                    localStorage.setItem(injectModeStorageKey(workspaceId), 'append');
                                                                                injectCapsule(pendingInject.body);
                                                                            }, children: t('panel.inject.confirm.append') }), _jsx("button", { type: "button", className: css.primaryBtn, disabled: view.injecting, onClick: () => {
                                                                                setInjectMode('replace');
                                                                                if (workspaceId !== undefined)
                                                                                    localStorage.setItem(injectModeStorageKey(workspaceId), 'replace');
                                                                                injectCapsule(pendingInject.body);
                                                                            }, children: t('panel.inject.confirm.replace') })] })] }))] }, capsule.id))) })) : (_jsx("ul", { className: css.capsuleList, children: visibleCapsules.map(capsule => (_jsxs("li", { className: css.manageCapsuleItem, children: [_jsxs("div", { className: css.manageCapsuleRow, "data-confirm": confirm?.kind === 'delete-capsule' && confirm.capsuleId === capsule.id ? '' : undefined, draggable: true, onDragStart: event => {
                                                                event.dataTransfer.setData('text/plain', dndPayload('capsule', capsule.id));
                                                                event.dataTransfer.effectAllowed = 'move';
                                                            }, onDragOver: event => { event.preventDefault(); }, onDrop: event => {
                                                                event.preventDefault();
                                                                const payload = parseDndPayload(event.dataTransfer.getData('text/plain'));
                                                                if (payload === null || payload.kind !== 'capsule')
                                                                    return;
                                                                reorderCapsules(moveIdBefore(view.capsules.map(row => row.id), payload.id, capsule.id));
                                                            }, children: [_jsx("span", { className: css.dragHandle, "aria-label": t('panel.manage.drag.capsule'), children: "\u22EE\u22EE" }), _jsx("span", { className: css.capsuleTitle, children: capsule.title }), _jsxs("span", { className: css.rowActions, children: [_jsx(Tooltip, { label: t('panel.manage.editCapsule'), side: "top", delayMs: 400, children: _jsx("button", { type: "button", className: css.iconButton, "aria-label": t('panel.manage.editCapsule'), onClick: () => { beginEditCapsule(capsule.id); }, children: _jsx(IconEditOutlineRegular, { size: 12, "aria-hidden": "true" }) }) }), _jsx(Tooltip, { label: t('panel.manage.deleteCapsule'), side: "top", delayMs: 400, children: _jsx("button", { type: "button", className: css.iconButton, "aria-label": t('panel.manage.deleteCapsule'), onClick: () => { requestDeleteCapsule(capsule.id); }, children: _jsx(IconTrashOutlineRegular, { size: 12, "aria-hidden": "true" }) }) })] }), confirm?.kind === 'delete-capsule' && confirm.capsuleId === capsule.id && (_jsx(ConfirmPopover, { title: t('panel.manage.confirm.deleteCapsule.title'), body: t('panel.manage.confirm.deleteCapsule.body'), actionLabel: t('panel.manage.confirm.action'), submitting: submitting, confirmMutation: confirmMutation, cancelConfirm: cancelConfirm, t: t }))] }), editor.kind === 'capsule-edit' && editor.capsuleId === capsule.id && (_jsx(CapsuleEditorForm, { title: editor.title, body: editor.body, submitting: submitting, reveal: true, setEditorTitle: setEditorTitle, setEditorBody: setEditorBody, commitEditor: commitEditor, cancelEditor: cancelEditor, t: t }))] }, capsule.id))) }))] })] })] }))] }), _jsx(Modal, { open: confirm?.kind === 'import-group', onClose: () => { if (!submitting)
                    cancelConfirm(); }, title: t('panel.manage.confirm.import.title'), closeLabel: t('panel.close'), description: confirm?.kind === 'import-group'
                    ? t('panel.manage.confirm.import.body', {
                        groupId: confirm.group.id,
                        writeCount: confirm.group.capsules.length,
                        deleteCount: confirm.deleteCount,
                    })
                    : '', footer: (_jsxs(_Fragment, { children: [_jsx("button", { type: "button", className: css.secondaryBtn, disabled: submitting, onClick: () => { cancelConfirm(); }, children: t('panel.manage.cancel') }), _jsx("button", { type: "button", className: css.primaryBtn, disabled: submitting, "aria-busy": submitting, "aria-label": submitting ? t('panel.manage.submitting') : t('panel.manage.confirm.import.action'), onClick: () => { confirmMutation(); }, children: submitting ? t('panel.manage.submitting') : t('panel.manage.confirm.import.action') })] })) })] }));
}
//# sourceMappingURL=SopCapsulesPanel.js.map