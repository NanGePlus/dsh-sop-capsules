/**
 * Inline style for a matched slash token. Same color, padding, and radius as
 * the composer reference class. The claim highlight uses a different color
 * and must keep it.
 */
export const SLASH_REF_STYLE = 'color: var(--dsw-alias-state-business-primary); padding: 0 4px; border-radius: 6px';
/** Claim-token style owned by the composer. A node carrying it is left alone. */
export const SLASH_CLAIM_STYLE = 'color: var(--dsw-alias-state-warn-label)';
/**
 * Built-in command spellings in both shipped locales, keyed by catalog name.
 * Mirrors the `command` namespace `token.*` entries. English tokens equal the
 * catalog name. A definition id selects the same row when a scope renames the
 * command.
 */
const BUILTIN_SPELLINGS = {
    goal: ['目标', 'goal'],
    plan: ['计划', 'plan'],
    feedback: ['反馈', 'feedback'],
    compact: ['压缩', 'compact'],
    permission: ['权限', 'permission'],
    export: ['导出', 'export'],
};
const BUILTIN_BY_DEFINITION = {
    '@deepseek-ai/dsh-command-goal': 'goal',
    '@deepseek-ai/dsh-plan-mode': 'plan',
    '@deepseek-ai/dsh-command-feedback': 'feedback',
    '@deepseek-ai/dsh-command-compact': 'compact',
    '@deepseek-ai/dsh-permission-presets': 'permission',
    '@deepseek-ai/dsh-session-log-export': 'export',
};
/** Symbol on the composer editor that holds the live spelling set. */
const SPELLINGS = Symbol.for('@nangeagi/dsh-sop-capsules/slash-spellings');
/**
 * Load slash spellings for one session: command names, built-in localized
 * tokens, the active `command` locale token when it differs from the lookup
 * key, and skill names. A failed or missing remote contributes nothing.
 * @param remote - commands and skills remotes.
 * @param sessionId - session whose catalogs apply.
 * @param commandToken - active `command` namespace lookup (`token.<name>`).
 * @returns spellings without a leading slash.
 */
export async function loadSlashSpellings(remote, sessionId, commandToken) {
    const [commands, skills] = await Promise.all([
        readRemote(() => remote.commands?.list(sessionId)),
        readRemote(() => remote.skills?.list({ sessionId })),
    ]);
    const spellings = new Set();
    for (const row of commandRows(commands)) {
        spellings.add(row.name);
        const builtin = builtinName(row);
        if (builtin !== undefined) {
            for (const token of BUILTIN_SPELLINGS[builtin] ?? [])
                spellings.add(token);
        }
        const localized = commandToken(row.name);
        if (localized !== '' && localized !== `token.${row.name}`)
            spellings.add(localized);
    }
    for (const name of skillNames(skills))
        spellings.add(name);
    return spellings;
}
/**
 * Install the slash decoration on one session input, or refresh its spelling
 * set when the transform is already installed. No editor means the draft
 * stays plain text.
 * @param input - session input shell, or undefined when the session has no scope.
 * @param spellings - names that decorate, without a leading slash.
 */
export function bindSlashRefDecoration(input, spellings) {
    const editor = composerEditor(input);
    if (editor === undefined)
        return;
    const live = editor[SPELLINGS];
    if (live !== undefined) {
        live.clear();
        for (const name of spellings)
            live.add(name);
        return;
    }
    const klass = editor._nodes?.get('text')?.klass;
    if (klass === undefined || editor.registerNodeTransform === undefined)
        return;
    const created = new Set(spellings);
    editor[SPELLINGS] = created;
    editor.registerNodeTransform(klass, (node) => {
        decorateSlashTextNode(node, created);
    });
}
/**
 * Mark composer text nodes dirty so the decoration transform runs again.
 * `setDraft` skips the write when the text is unchanged, which would leave a
 * repeated inject unstyled.
 * @param input - session input shell, or undefined when the session has no scope.
 */
export function refreshSlashRefDecoration(input) {
    const editor = composerEditor(input);
    if (editor?.update === undefined)
        return;
    editor.update(() => {
        try {
            markPendingTextDirty(editor);
        }
        catch (error) {
            // The draft is already written. A shell that hides its pending editor state
            // cannot be restyled; the slash text stays plain.
            console.error('[sop-capsules] slash reference refresh failed:', error);
        }
    });
}
/** Dirty every text node in the update that is in progress. */
function markPendingTextDirty(editor) {
    const pending = editor._pendingEditorState;
    if (pending === undefined)
        return;
    for (const node of pending._nodeMap.values()) {
        if (node.getType() === 'text')
            node.markDirty();
    }
}
/**
 * Style one text node when it holds an exact slash spelling. A matched token
 * that shares its node with other text is split out, and the other pieces
 * drop a copied reference style in that same call so they are not merged
 * back. Claim-styled nodes are left to the composer. A node that no longer
 * matches drops this style.
 * @param node - composer text node.
 * @param spellings - names that decorate, without a leading slash.
 */
export function decorateSlashTextNode(node, spellings) {
    if (node.getType() !== 'text' || !node.isSimpleText())
        return;
    if (node.getStyle() === SLASH_CLAIM_STYLE)
        return;
    const text = node.getTextContent();
    const match = firstSlashSpelling(text, spellings);
    if (match === null) {
        if (node.getStyle() === SLASH_REF_STYLE)
            node.setStyle('');
        return;
    }
    if (match.start === 0 && match.end === text.length) {
        if (node.getStyle() !== SLASH_REF_STYLE)
            node.setStyle(SLASH_REF_STYLE);
        return;
    }
    // Split copies the style onto every piece. Same-style siblings merge
    // before the next transform, so the remainder must drop this style now.
    const parts = match.start === 0
        ? node.splitText(match.end)
        : node.splitText(match.start, match.end);
    const token = match.start === 0 ? parts[0] : parts[1];
    for (const part of parts) {
        if (part === token) {
            if (part.getStyle() !== SLASH_REF_STYLE && part.getStyle() !== SLASH_CLAIM_STYLE) {
                part.setStyle(SLASH_REF_STYLE);
            }
        }
        else if (part.getStyle() === SLASH_REF_STYLE) {
            part.setStyle('');
        }
    }
}
/**
 * First `/spelling` in `text` whose entire non-space run is in `spellings`.
 * The slash sits at the start of `text` or after whitespace. A glued suffix
 * (`/计划小程序`, `/plan.md`) is a different run and does not match.
 * @param text - one text node's content.
 * @param spellings - names without a leading slash.
 * @returns the `/spelling` range, or null.
 */
export function firstSlashSpelling(text, spellings) {
    const pattern = /(^|\s)\/(\S+)/gu;
    let found;
    while ((found = pattern.exec(text)) !== null) {
        const name = found[2] ?? '';
        if (!spellings.has(name))
            continue;
        const start = found.index + (found[1]?.length ?? 0);
        return { start, end: start + 1 + name.length };
    }
    return null;
}
/** Read one optional remote call. A throw, rejection, or failed result yields undefined. */
async function readRemote(call) {
    let pending;
    try {
        pending = call();
    }
    catch (error) {
        // Cordis throws when a remote property was not injected. The other catalog
        // can still contribute spellings; inject still writes the draft.
        console.error('[sop-capsules] slash catalog read failed:', error);
        return undefined;
    }
    if (pending === undefined)
        return undefined;
    let result;
    try {
        result = await pending;
    }
    catch (error) {
        // The commands or skills namespace can be absent, or the session can have no agent.
        // Inject still writes the draft; slash tokens stay plain text.
        console.error('[sop-capsules] slash catalog read failed:', error);
        return undefined;
    }
    if (!result.ok)
        return undefined;
    return result.value;
}
/** Normalize a commands.list value into rows. */
function commandRows(value) {
    const list = Array.isArray(value)
        ? value
        : (isRecord(value) && Array.isArray(value.commands) ? value.commands : []);
    const rows = [];
    for (const item of list) {
        if (!isRecord(item) || typeof item.name !== 'string' || item.name === '')
            continue;
        rows.push({
            name: item.name,
            ...(typeof item.definitionId === 'string' ? { definitionId: item.definitionId } : {}),
        });
    }
    return rows;
}
/** Catalog name for a built-in row, from its definition id or its name. */
function builtinName(row) {
    if (row.definitionId !== undefined) {
        const fromId = BUILTIN_BY_DEFINITION[row.definitionId];
        if (fromId !== undefined)
            return fromId;
    }
    return BUILTIN_SPELLINGS[row.name] === undefined ? undefined : row.name;
}
/** Skill names from a skills.list value. */
function skillNames(value) {
    const list = isRecord(value) && Array.isArray(value.skills)
        ? value.skills
        : (Array.isArray(value) ? value : []);
    const names = [];
    for (const item of list) {
        if (typeof item === 'string' && item !== '')
            names.push(item);
        else if (isRecord(item) && typeof item.name === 'string' && item.name !== '')
            names.push(item.name);
    }
    return names;
}
/** Session input shell editor, when the shell exposes one. */
function composerEditor(input) {
    if (input === undefined)
        return undefined;
    const editor = input.editor;
    if (editor === null || typeof editor !== 'object')
        return undefined;
    return editor;
}
/** Plain object check for catalog payloads. */
function isRecord(value) {
    return value !== null && typeof value === 'object';
}
//# sourceMappingURL=slash-refs.js.map