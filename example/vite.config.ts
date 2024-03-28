import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { capsizeRadixPlugin } from "../src/index"
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
    capsizeRadixPlugin({
      outputPath: `./public/inter-typography.css`,
      defaultFontStack: [inter, arial],
    }),
    capsizeRadixPlugin({
      outputPath: `./public/work-sans-typography.css`,
      defaultFontStack: [quattrocentoSans, arial],
      headingFontStack: [workSans, arial],
    }),
    capsizeRadixPlugin({
      outputPath: `./public/josefin-typography.css`,
      defaultFontStack: [josefin, arial],
    }),
    capsizeRadixPlugin({
      outputPath: `./public/caveat-brush-typography.css`,
      defaultFontStack: [caveatBrush, arial],
    }),
    capsizeRadixPlugin({
      outputPath: `./public/source-serif.css`,
      headingFontStack: [sourceSerif, arial],
      defaultFontStack: [sourcesSans, arial],
    }),
    capsizeRadixPlugin({
      outputPath: `./public/rosario-crimson.css`,
      defaultFontStack: [crimsonText, arial],
      headingFontStack: [rosario, arial],
    }),
    capsizeRadixPlugin({
      outputPath: `./public/montserrat-arvo.css`,
      defaultFontStack: [arvo, arial],
      headingFontStack: [montserrat, arial],
    }),
    capsizeRadixPlugin({
      outputPath: `./public/alegreya.css`,
      defaultFontStack: [alegreya, arial],
      headingFontStack: [alegreyaSans, arial],
    }),
    capsizeRadixPlugin({
      outputPath: `./public/playfair.css`,
      defaultFontStack: [firaSans, arial],
      headingFontStack: [playfairDisplay, arial],
    }),
    capsizeRadixPlugin({
      outputPath: `./public/raleway.css`,
      defaultFontStack: [libreBaskerville, arial],
      headingFontStack: [raleway, arial],
    }),
    capsizeRadixPlugin({
      outputPath: `./public/lato.css`,
      defaultFontStack: [lato, arial],
    }),
    capsizeRadixPlugin({
      outputPath: `./public/ptsans.css`,
      defaultFontStack: [pTSans, arial],
      headingFontStack: [oswald, arial],
    }),
    capsizeRadixPlugin({
      outputPath: `./public/merriweather.css`,
      defaultFontStack: [merriweather, arial],
      headingFontStack: [merriweatherSans, arial],
    }),
    capsizeRadixPlugin({
      outputPath: `./public/system.css`,
    }),
  ],
})
