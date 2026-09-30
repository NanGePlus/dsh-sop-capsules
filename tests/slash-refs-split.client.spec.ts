// @vitest-environment jsdom
/**
 * A reference-styled slash token that shares its node with more text must
 * split once. Lexical merges same-style siblings before the next transform,
 * so leaving the copied style on the remainder retriggers the split forever.
 */
import { readFileSync } from 'node:fs'
import { afterEach, describe, expect, it } from 'vitest'
import {
  $createParagraphNode,
  $createTextNode,
  $getRoot,
  $isElementNode,
  $isTextNode,
  createEditor,
  TextNode,
  type LexicalEditor,
} from '../../../packages/client/ui-conversation/node_modules/lexical'
import { bindSlashRefDecoration, SLASH_REF_STYLE } from '../src/client/slash-refs.ts'

/** Composer claim color from `claim-decor.ts`. The plugin must leave this exact style alone. */
const CLAIM_STYLE = 'color: var(--dsw-alias-state-business-primary)'

const cleanups: Array<() => void> = []
afterEach(() => {
  for (const cleanup of cleanups.splice(0).reverse()) cleanup()
})

/**
 * The composer's claim transform, registered on the same editor as the plugin.
 * Mirrors `registerClaimDecoration`: the live token includes its trailing space,
 * and a leaf whose text is that token without the space still receives the claim color.
 * @param editor - editor under test.
 * @param activeToken - claim token, or null before the menu confirms.
 * @returns the unregister disposer.
 */
function bindClaimDecoration(editor: LexicalEditor, activeToken: () => string | null): () => void {
  return editor.registerNodeTransform(TextNode, (node) => {
    const block = $getRoot().getFirstChild()
    const first = $isElementNode(block) ? block.getFirstChild() : null
    if (!$isTextNode(first) || node.getKey() !== first.getKey()) {
      if (node.getStyle() === CLAIM_STYLE) node.setStyle('')
      return
    }
    const text = node.getTextContent()
    const active = activeToken()
    const token = text === active?.trimEnd() ? text : active
    if (token === null || !text.startsWith(token)) {
      if (node.getStyle() === CLAIM_STYLE) node.setStyle('')
      return
    }
    if (text.length > token.length) {
      const [tokenNode] = node.splitText(token.length)
      if (tokenNode !== undefined && tokenNode.getStyle() !== CLAIM_STYLE) tokenNode.setStyle(CLAIM_STYLE)
      return
    }
    if (node.getStyle() !== CLAIM_STYLE) node.setStyle(CLAIM_STYLE)
  })
}

/** Text nodes left after decoration, in document order. */
function leaves(editor: LexicalEditor): Array<{ text: string; style: string }> {
  return editor.getEditorState().read(() => {
    const found: Array<{ text: string; style: string }> = []
    const walk = (node: { getChildren?: () => unknown[]; getType?: () => string; getTextContent?: () => string; getStyle?: () => string }): void => {
      if (node.getType?.() === 'text') {
        found.push({ text: node.getTextContent?.() ?? '', style: node.getStyle?.() ?? '' })
        return
      }
      for (const child of node.getChildren?.() ?? []) walk(child as typeof node)
    }
    walk($getRoot())
    return found
  })
}

describe('slash reference split', () => {
  it('splits following text off a reference-styled token without looping', () => {
    const editor = createEditor({
      onError: (error) => { throw error },
    })
    const root = document.createElement('div')
    root.contentEditable = 'true'
    document.body.append(root)
    editor.setRootElement(root)
    cleanups.push(() => {
      editor.setRootElement(null)
      root.remove()
    })
    bindSlashRefDecoration({ editor }, new Set(['计划']))
    editor.update(() => {
      const text = $createTextNode('/计划 划')
      text.setStyle(SLASH_REF_STYLE)
      const paragraph = $createParagraphNode()
      paragraph.append(text)
      $getRoot().append(paragraph)
    }, { discrete: true })
    expect(leaves(editor)).toEqual([
      { text: '/计划', style: SLASH_REF_STYLE },
      { text: ' 划', style: '' },
    ])
  })

  it('stays editable after the composer claims a styled /计划 token', () => {
    let token: string | null = null
    const editor = createEditor({
      onError: (error) => { throw error },
    })
    const root = document.createElement('div')
    root.contentEditable = 'true'
    document.body.append(root)
    editor.setRootElement(root)
    cleanups.push(() => {
      editor.setRootElement(null)
      root.remove()
    })
    const claimDecor = readFileSync(
      'packages/client/ui-conversation/src/client/input/editor/claim-decor.ts',
      'utf8',
    )
    expect(claimDecor).toContain(`const TOKEN_STYLE = '${CLAIM_STYLE}'`)
    // Claim decoration registers first, matching the composer shell, then the plugin.
    bindClaimDecoration(editor, () => token)
    bindSlashRefDecoration({ editor }, new Set(['计划']))
    editor.update(() => {
      const text = $createTextNode('/计划 写一个冒泡排序')
      text.setStyle(SLASH_REF_STYLE)
      const paragraph = $createParagraphNode()
      paragraph.append(text)
      $getRoot().append(paragraph)
    }, { discrete: true })

    token = '/计划 '
    editor.update(() => {
      const block = $getRoot().getFirstChild()
      if (!$isElementNode(block)) throw new Error('missing block')
      const leaf = block.getFirstChild()
      if (!$isTextNode(leaf)) throw new Error('missing leaf')
      leaf.markDirty()
    }, { discrete: true })

    editor.update(() => {
      const block = $getRoot().getFirstChild()
      if (!$isElementNode(block)) throw new Error('missing block')
      const leaf = block.getLastChild()
      if (!$isTextNode(leaf)) throw new Error('missing leaf')
      leaf.setTextContent(`${leaf.getTextContent()}x`)
    }, { discrete: true })

    expect(editor.getEditorState().read(() => $getRoot().getTextContent())).toBe('/计划 写一个冒泡排序x')
  })
})
