import plugin_gridsome_plugin_tailwindcss_5 from "D:\\websites\\london2020\\node_modules\\gridsome-plugin-tailwindcss\\gridsome.client.js"
import plugin_gridsome_plugin_google_analytics_6 from "D:\\websites\\london2020\\node_modules\\@gridsome\\plugin-google-analytics\\gridsome.client.js"
import plugin_gridsome_vue_remark_7 from "D:\\websites\\london2020\\node_modules\\@gridsome\\vue-remark\\gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_5,
    options: {"shouldImport":true,"shouldTimeTravel":true,"importUrlConfig":{"modernBrowser":true},"presetEnvConfig":{"stage":0,"autoprefixer":false,"features":{"focus-visible-pseudo-class":false,"focus-within-pseudo-class":false}}}
  },
  {
    run: plugin_gridsome_plugin_google_analytics_6,
    options: {"id":"UA-84231316-6"}
  },
  {
    run: plugin_gridsome_vue_remark_7,
    options: {}
  }
]
