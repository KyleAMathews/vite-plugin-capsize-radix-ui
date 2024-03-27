import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "@radix-ui/themes/styles.css"
import "./App.css"
import { Theme } from "@radix-ui/themes"
import "@fontsource/inter/latin.css"
import "@fontsource/work-sans/latin.css"
import "@fontsource/josefin-sans/latin.css"
import "@fontsource/source-serif-4/latin.css"
import "@fontsource/source-sans-3/latin.css"
import "@fontsource/rosario/latin.css"
import "@fontsource/crimson-text/latin.css"
import "@fontsource/crimson-pro/latin.css"
import "@fontsource/montserrat/latin.css"
import "@fontsource/arvo/latin.css"
import "@fontsource/alegreya/latin.css"
import "@fontsource/alegreya-sans/latin.css"
import "@fontsource/playfair-display/latin.css"
import "@fontsource/fira-sans/latin.css"
import "@fontsource/quattrocento-sans/latin.css"
import "@fontsource/libre-baskerville/latin.css"
import "@fontsource/raleway/latin.css"
import "@fontsource/lato/latin.css"
import "@fontsource/pt-sans/latin.css"
import "@fontsource/oswald/latin.css"
import "@fontsource/merriweather/latin.css"
import "@fontsource/merriweather-sans/latin.css"

ReactDOM.createRoot(document.getElementById(`root`)!).render(
  <React.StrictMode>
    <Theme accentColor="indigo">
      <App />
    </Theme>
  </React.StrictMode>
)
