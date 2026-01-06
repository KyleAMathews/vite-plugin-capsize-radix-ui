# vite-plugin-capsize-radix

Generate bulletproof typography css for [@radix-ui/themes](https://www.radix-ui.com/)

Now changing fonts is as easy as changing colors.

## Why

Getting fonts to look right on the web is [_hard_](https://fantasai.inkedblade.net/style/talks/atypi-2021/atypi-2021-precise-text-alignment.mp4) — so most peoply rely on
a few typography frameworks and fonts. But it doesn't have to be that way.
[Capsize](https://seek-oss.github.io/capsize/) fixes text sizing and layout
allowing for precise text alignment so changing fonts is as easy as changing
colors.

https://github.com/KyleAMathews/vite-plugin-capsize-radix-ui/assets/71047/3ec5d6ca-bf00-4b79-8552-4e3da3454f52

Capsize makes fonts render the way you expect them to. With Capsize, if you
assign a font to occupy 16px of height, it _actually_ will.

This plugin glues Capsize with the fantastic Radix theming components.

Similar plugins could be built for other meta-frameworks & component libraries — open an issue
if you're interested on collaborating on one.

## How to use

### Install

`npm install vite-plugin-capsize-radix`

### Add to vite.config.ts

A sample React config:

```ts
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { capsizeRadixPlugin } from "vite-plugin-capsize-radix"
import merriweather from "@capsizecss/metrics/merriweather"
import merriweatherSans from "@capsizecss/metrics/merriweatherSans"
import sourceCodePro from "@capsizecss/metrics/sourceCodePro"
import arial from "@capsizecss/metrics/arial"

export default defineConfig({
  plugins: [
    react(),
    capsizeRadixPlugin({
      // Import this file into your app after you import Radix's CSS.
      outputPath: `./public/merriweather.css`,
      // Pass in Capsize font metric objects.
      defaultFontStack: [merriweather, arial],
      headingFontStack: [merriweatherSans, arial],
      codingFontStack: [sourceCodePro, arial],
    }),
  ],
})
```

### Using with Radix UI

This plugin overrides all typography related CSS for Radix so you can simply
use their typography components as normal (e.g. `<Heading>`, `<Text>`, `<Strong>`, etc)

The plugin sets the variables for Radix's Type scale and Font family for Radix.
It doesn't set Font weight. It sets the strong, em, and quote to use the default font family.
You can set the default, heading, and coding font stacks separately.

See e.g. the [documentation for `<Text>`](https://www.radix-ui.com/themes/docs/components/text).

They all share a `size` prop from "1" to "10". This corresponds to the optional
`fontSizes` array passed to the plugin e.g. `size="0"` is the first value of
the array, etc. `<Text>` defaults to `size="2"` and `<Heading>` defaults to
`size="6"`.

As Capsize trims _all_ space around text, you'll find that `<Flex gap="[space]">` becomes
your best friend for controlling spacing between elements e.g.

<img width="669" alt="Screenshot 2024-03-28 at 10 44 10 AM" src="https://github.com/KyleAMathews/vite-plugin-capsize-radix-ui/assets/71047/b8552d58-4e2d-42d6-9b7b-a595466c2725">

### Fallback fonts

Another great freebie Capsize gives you is it automatically generates CSS for
aligning your fallback font with your main font, which can dramatically improve
the [Cumulative Layout Shift](https://web.dev/cls/) metric for sites that depend on a web font

### Custom fonts

Capsize has precalculated metrics for system and many open source fonts. If you're
using a custom font, you can calculate the font metrics using their [@capsizecss/unpack](https://github.com/seek-oss/capsize?tab=readme-ov-file#unpack) package.

## Responsive styles

This plugin automatically generates responsive styles. Typically you want your mobile font-size
to be slightly smaller than on desktop. We do that by shifting the text a size smaller on mobile.

## Parameters:

- **outputPath (string): Required**. The file path where the generated CSS or design tokens should be saved.
- **textStyles (TextStyle[]): Optional**. An array of objects, each representing a text style. Each object contains two properties: `fontSize` and `lineHeight`, which are numerical values, pixels for `fontSize` and pixels or relative value for `lineHeight`. Defaults to:
  ```ts
  ;[
    { fontSize: 9, lineHeight: 21 },
    { fontSize: 11, lineHeight: 23 },
    { fontSize: 12, lineHeight: 25 },
    { fontSize: 14, lineHeight: 27 },
    { fontSize: 18, lineHeight: 29 },
    { fontSize: 24, lineHeight: 36 },
    { fontSize: 36, lineHeight: 44 },
    { fontSize: 48, lineHeight: 52 },
    { fontSize: 64, lineHeight: 64 },
  ]
  ```
- **defaultFontStack (FontMetrics[]): Optional**. An array of `FontMetrics` objects. Defaults to a System Font stack.
- **headingFontStack (FontMetrics[]): Optional**. An array of `FontMetrics` objects. Defaults to your `defaultFontStack`.
- **codingFontStack (FontMetrics[]): Optional**. An array of `FontMetrics` objects. Defaults to your `defaultFontStack`.
