import { describe, it, expect, beforeEach } from "vitest"
import { capsizeRadixPlugin } from "../src/index"
import inter from "@capsizecss/metrics/inter"
import arial from "@capsizecss/metrics/arial"
import fs from "fs"

const pluginOptions = {
  outputPath: `./tests/test.css`,
  defaultFontStack: [inter, arial],
}

// Helper to run buildStart without needing full Vite context
function runBuildStart(plugin: ReturnType<typeof capsizeRadixPlugin>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugin.buildStart?.call({} as any)
}

describe(`capsizeRadixPlugin`, () => {
  beforeEach(() => {
    // Clean up test file before each test
    if (fs.existsSync(pluginOptions.outputPath)) {
      fs.unlinkSync(pluginOptions.outputPath)
    }
  })

  it(`generates CSS file on buildStart`, () => {
    const plugin = capsizeRadixPlugin(pluginOptions)
    runBuildStart(plugin)

    expect(fs.existsSync(pluginOptions.outputPath)).toBe(true)
  })

  it(`scopes size variants to text elements only using :where()`, () => {
    const plugin = capsizeRadixPlugin(pluginOptions)
    runBuildStart(plugin)

    const css = fs.readFileSync(pluginOptions.outputPath, `utf-8`)

    // Should use :where() selector for text elements
    const whereSelector = `:where(.rt-Text, .rt-Heading, .rt-Em, .rt-Quote, .rt-Link).rt-r-size-1`
    expect(css).toContain(whereSelector)

    // Should NOT use the old broad selector
    expect(css).not.toContain(`.rt-r-size-1:not(.rt-DialogContent)`)
  })

  it(`does not apply capsize styles to non-text elements like Card or RadioCard`, () => {
    const plugin = capsizeRadixPlugin(pluginOptions)
    runBuildStart(plugin)

    const css = fs.readFileSync(pluginOptions.outputPath, `utf-8`)

    // The selector should only target text elements, not any element with rt-r-size-*
    // This ensures Card, RadioCard, Button etc don't get display:table pseudo-elements
    // Match selectors that start with .rt-r-size- (which would match any element)
    // but exclude those wrapped in :where() or prefixed with .rt-Code
    const broadSizeSelectors = css.match(/^\.rt-r-size-\d+/gm) || []

    expect(broadSizeSelectors).toHaveLength(0)
  })

  it(`generates styles for rt-Text, rt-Em, rt-Quote, and rt-Code`, () => {
    const plugin = capsizeRadixPlugin(pluginOptions)
    runBuildStart(plugin)

    const css = fs.readFileSync(pluginOptions.outputPath, `utf-8`)

    expect(css).toContain(`.rt-Text {`)
    expect(css).toContain(`.rt-Em {`)
    expect(css).toContain(`.rt-Quote {`)
    expect(css).toContain(`.rt-Code {`)
  })

  it(`sets radix theme CSS variables`, () => {
    const plugin = capsizeRadixPlugin(pluginOptions)
    runBuildStart(plugin)

    const css = fs.readFileSync(pluginOptions.outputPath, `utf-8`)

    expect(css).toContain(`--default-font-family:`)
    expect(css).toContain(`--heading-font-family:`)
    expect(css).toContain(`--font-size-1:`)
    expect(css).toContain(`--line-height-1:`)
  })

  describe(`validation errors`, () => {
    it(`throws error when textStyles has fewer than 3 entries`, () => {
      const plugin = capsizeRadixPlugin({
        ...pluginOptions,
        textStyles: [
          { fontSize: 12, lineHeight: 20 },
          { fontSize: 14, lineHeight: 22 },
        ],
      })

      expect(() => runBuildStart(plugin)).toThrow(
        `[capsize-radix] textStyles must have at least 3 entries (found 2)`
      )
    })

    it(`throws error when fontSize is not a positive number`, () => {
      const plugin = capsizeRadixPlugin({
        ...pluginOptions,
        textStyles: [
          { fontSize: -5, lineHeight: 20 },
          { fontSize: 14, lineHeight: 22 },
          { fontSize: 16, lineHeight: 24 },
        ],
      })

      expect(() => runBuildStart(plugin)).toThrow(
        `[capsize-radix] textStyles[0].fontSize must be a positive number`
      )
    })

    it(`throws error when lineHeight is not a positive number`, () => {
      const plugin = capsizeRadixPlugin({
        ...pluginOptions,
        textStyles: [
          { fontSize: 12, lineHeight: 0 },
          { fontSize: 14, lineHeight: 22 },
          { fontSize: 16, lineHeight: 24 },
        ],
      })

      expect(() => runBuildStart(plugin)).toThrow(
        `[capsize-radix] textStyles[0].lineHeight must be a positive number`
      )
    })

    it(`throws error when output directory does not exist`, () => {
      const plugin = capsizeRadixPlugin({
        ...pluginOptions,
        outputPath: `./nonexistent-dir/test.css`,
      })

      expect(() => runBuildStart(plugin)).toThrow(
        `[capsize-radix] Output directory does not exist: ./nonexistent-dir`
      )
    })
  })
})
