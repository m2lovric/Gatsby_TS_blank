const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Programming\\Prototyp_ts_\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("C:\\Programming\\Prototyp_ts_\\src\\pages\\404.tsx"))),
  "component---src-pages-about-tsx": hot(preferDefault(require("C:\\Programming\\Prototyp_ts_\\src\\pages\\about.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("C:\\Programming\\Prototyp_ts_\\src\\pages\\index.tsx")))
}

