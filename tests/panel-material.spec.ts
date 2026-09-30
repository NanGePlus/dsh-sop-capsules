/**
 * The capsule card paints the shared translucent menu fill. That fill stays
 * see-through unless the same rule also applies the menu backdrop filter.
 */
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const css = readFileSync(new URL('../src/client/SopCapsulesPanel.module.css', import.meta.url), 'utf8')

/**
 * Body of one class rule, without nested rules.
 * @param selector - class name without the leading dot.
 * @returns the declaration block, or an empty string when the rule is absent.
 */
function ruleBody(selector: string): string {
  const match = new RegExp(`\\.${selector}\\s*\\{([^}]*)\\}`).exec(css)
  return match?.[1] ?? ''
}

describe('sop capsules panel material', () => {
  it.each(['panel', 'groupPopover'])('pairs the menu fill with the backdrop filter on .%s', (selector) => {
    const body = ruleBody(selector)
    expect(body).toContain('background: var(--dsw-specific-menu)')
    expect(body).toContain('backdrop-filter: var(--dsw-menu-backdrop-filter)')
  })
})
