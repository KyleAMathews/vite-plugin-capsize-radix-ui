import { describe, it, expect, vi, beforeEach } from "vitest"
import { radixCapsizePlugin } from "../plugin"
import { PluginContext } from "vite"
import inter from "@capsizecss/metrics/inter"
import arial from "@capsizecss/metrics/arial"
import workSans from "@capsizecss/metrics/workSans"
import montserrat from "@capsizecss/metrics/montserrat"

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
    const plugin = radixCapsizePlugin(pluginOptions)
    plugin.buildStart(PluginContext)
  })
})
