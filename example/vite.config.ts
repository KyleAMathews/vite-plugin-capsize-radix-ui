import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { radixCapsizePlugin } from "../src/index"
import inter from "@capsizecss/metrics/inter"
import arial from "@capsizecss/metrics/arial"
import workSans from "@capsizecss/metrics/workSans"
import josefin from "@capsizecss/metrics/josefinSans"
import caveatBrush from "@capsizecss/metrics/caveatBrush"
import sourceSerif from "@capsizecss/metrics/sourceSerif4"
import sourcesSans from "@capsizecss/metrics/sourceSans3"
import crimsonText from "@capsizecss/metrics/crimsonText"
import rosario from "@capsizecss/metrics/rosario"
import montserrat from "@capsizecss/metrics/montserrat"
import arvo from "@capsizecss/metrics/arvo"
import alegreya from "@capsizecss/metrics/alegreya"
import alegreyaSans from "@capsizecss/metrics/alegreyaSans"
import firaSans from "@capsizecss/metrics/firaSans"
import playfairDisplay from "@capsizecss/metrics/playfairDisplay"
import quattrocentoSans from "@capsizecss/metrics/quattrocentoSans"
import raleway from "@capsizecss/metrics/raleway"
import libreBaskerville from "@capsizecss/metrics/libreBaskerville"
import lato from "@capsizecss/metrics/lato"
import oswald from "@capsizecss/metrics/oswald"
import pTSans from "@capsizecss/metrics/pTSans"
import merriweather from "@capsizecss/metrics/merriweather"
import merriweatherSans from "@capsizecss/metrics/merriweatherSans"

// For variable fonts, we need to modify the familyName
// workSans.familyName = `Work Sans Variable`

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    radixCapsizePlugin({
      outputPath: `./public/inter-typography.css`,
      defaultFontStack: [inter, arial],
    }),
    radixCapsizePlugin({
      outputPath: `./public/work-sans-typography.css`,
      defaultFontStack: [quattrocentoSans, arial],
      headingFontStack: [workSans, arial],
    }),
    radixCapsizePlugin({
      outputPath: `./public/josefin-typography.css`,
      defaultFontStack: [josefin, arial],
    }),
    radixCapsizePlugin({
      outputPath: `./public/caveat-brush-typography.css`,
      defaultFontStack: [caveatBrush, arial],
    }),
    radixCapsizePlugin({
      outputPath: `./public/source-serif.css`,
      headingFontStack: [sourceSerif, arial],
      defaultFontStack: [sourcesSans, arial],
    }),
    radixCapsizePlugin({
      outputPath: `./public/rosario-crimson.css`,
      defaultFontStack: [crimsonText, arial],
      headingFontStack: [rosario, arial],
    }),
    radixCapsizePlugin({
      outputPath: `./public/montserrat-arvo.css`,
      defaultFontStack: [arvo, arial],
      headingFontStack: [montserrat, arial],
    }),
    radixCapsizePlugin({
      outputPath: `./public/alegreya.css`,
      defaultFontStack: [alegreya, arial],
      headingFontStack: [alegreyaSans, arial],
    }),
    radixCapsizePlugin({
      outputPath: `./public/playfair.css`,
      defaultFontStack: [firaSans, arial],
      headingFontStack: [playfairDisplay, arial],
    }),
    radixCapsizePlugin({
      outputPath: `./public/raleway.css`,
      defaultFontStack: [libreBaskerville, arial],
      headingFontStack: [raleway, arial],
    }),
    radixCapsizePlugin({
      outputPath: `./public/lato.css`,
      defaultFontStack: [lato, arial],
    }),
    radixCapsizePlugin({
      outputPath: `./public/ptsans.css`,
      defaultFontStack: [pTSans, arial],
      headingFontStack: [oswald, arial],
    }),
    radixCapsizePlugin({
      outputPath: `./public/merriweather.css`,
      defaultFontStack: [merriweather, arial],
      headingFontStack: [merriweatherSans, arial],
    }),
    radixCapsizePlugin({
      outputPath: `./public/system.css`,
    }),
  ],
})
