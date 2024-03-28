import { describe, it, expect, vi, beforeEach } from "vitest"
import { capsizeRadixPlugin } from "../src/index"
import { PluginContext } from "vite"
import inter from "@capsizecss/metrics/inter"
import arial from "@capsizecss/metrics/arial"

const buildFunctionMock = vi.fn()
const pluginOptions = {
  outputPath: `./tests/test.css`,
  defaultFontStack: [inter, arial],
}

describe(`myVitePlugin`, () => {
  beforeEach(() => {
    buildFunctionMock.mockClear()
  })

  it(`calls build on buildStart`, () => {
    const plugin = capsizeRadixPlugin(pluginOptions)
    plugin.buildStart(PluginContext)
  })
})
