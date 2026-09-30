/**
 * Slash spellings for capsule inject. The stock composer decorates `/name`
 * only when the name is ASCII (`\\w`) and already on a trigger lexicon, so a
 * localized command such as `/计划` stays plain text. This module loads the
 * session's command and skill names and styles exact matches on the composer
 * text node. Official packages stay unchanged so a packed plugin is enough.
 * @module @nangeagi/dsh-sop-capsules/client/slash-refs
 */
import type { RemoteResult } from '@deepseek-ai/dsh-typert-protocol';
import type { SessionId } from '@deepseek-ai/dsh-session/types';
/**
 * Inline style for a matched slash token. Same color, padding, and radius as
 * the composer reference class. A confirmed command uses that color without
 * padding; `SLASH_CLAIM_STYLE` is that highlight, and a node carrying it is left alone.
 */
export declare const SLASH_REF_STYLE = "color: var(--dsw-alias-state-business-primary); padding: 0 4px; border-radius: 6px";
/** Claim-token style owned by the composer. A node carrying this exact style is left alone. */
export declare const SLASH_CLAIM_STYLE = "color: var(--dsw-alias-state-business-primary)";
/** Text node methods the decoration transform uses. */
export interface SlashTextNode {
    getType(): string;
    getTextContent(): string;
    getStyle(): string;
    setStyle(style: string): void;
    isSimpleText(): boolean;
    splitText(...offsets: number[]): SlashTextNode[];
}
/** Host remotes that publish command and skill names. Absent methods yield no spellings. */
export interface SlashCatalogRemote {
    commands?: {
        list: (sessionId: SessionId) => Promise<RemoteResult<unknown>>;
    };
    skills?: {
        list: (query: {
            sessionId: SessionId;
        }) => Promise<RemoteResult<unknown>>;
    };
}
/**
 * Load slash spellings for one session: command names, built-in localized
 * tokens, the active `command` locale token when it differs from the lookup
 * key, and skill names. A failed or missing remote contributes nothing.
 * @param remote - commands and skills remotes.
 * @param sessionId - session whose catalogs apply.
 * @param commandToken - active `command` namespace lookup (`token.<name>`).
 * @returns spellings without a leading slash.
 */
export declare function loadSlashSpellings(remote: SlashCatalogRemote, sessionId: SessionId, commandToken: (name: string) => string): Promise<Set<string>>;
/**
 * Install the slash decoration on one session input, or refresh its spelling
 * set when the transform is already installed. No editor means the draft
 * stays plain text.
 * @param input - session input shell, or undefined when the session has no scope.
 * @param spellings - names that decorate, without a leading slash.
 */
export declare function bindSlashRefDecoration(input: object | undefined, spellings: ReadonlySet<string>): void;
/**
 * Mark composer text nodes dirty so the decoration transform runs again.
 * `setDraft` skips the write when the text is unchanged, which would leave a
 * repeated inject unstyled.
 * @param input - session input shell, or undefined when the session has no scope.
 */
export declare function refreshSlashRefDecoration(input: object | undefined): void;
/**
 * Style one text node when it holds an exact slash spelling. A matched token
 * that shares its node with other text is split out, and the other pieces
 * drop a copied reference style in that same call so they are not merged
 * back. Claim-styled nodes are left to the composer. A node that no longer
 * matches drops this style.
 * @param node - composer text node.
 * @param spellings - names that decorate, without a leading slash.
 */
export declare function decorateSlashTextNode(node: SlashTextNode, spellings: ReadonlySet<string>): void;
/**
 * First `/spelling` in `text` whose entire non-space run is in `spellings`.
 * The slash sits at the start of `text` or after whitespace. A glued suffix
 * (`/计划小程序`, `/plan.md`) is a different run and does not match.
 * @param text - one text node's content.
 * @param spellings - names without a leading slash.
 * @returns the `/spelling` range, or null.
 */
export declare function firstSlashSpelling(text: string, spellings: ReadonlySet<string>): {
    start: number;
    end: number;
} | null;
//# sourceMappingURL=slash-refs.d.ts.map