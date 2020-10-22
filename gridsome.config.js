// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


module.exports = {
  siteName: 'London',
  plugins : [
    {
      use: "gridsome-plugin-tailwindcss",
      /**
      * These are the default options. You don't need to set any options to get
      * going. Seriously, you don't need to declare tailwind.config.js.

      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
    },
    {
      use    : '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-84231316-6'
      }
    },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-ML9B8GF',
        enabled: true,
        debug: true
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post', // Required
        baseDir: './posts', // Where .md files are located
        pathPrefix: '/posts', // Add route prefix. Optional
        template: './src/templates/Post.vue' // Optional
      }
    }
  ]
};




