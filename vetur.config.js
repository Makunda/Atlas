// vetur.config.js
/** @type {import('vls').VeturConfig} */
module.exports = {
    // **optional** default: `{}`
    // override vscode settings
    // Notice: It only affects the settings used by Vetur.
    settings: {
      "vetur.useWorkspaceDependencies": true,
      "vetur.experimental.templateInterpolationService": true
    },
    // **optional** default: `[{ root: './' }]`
    // support monorepos
    projects: [
      './atlas-api', // Shorthand for specifying only the project root location
      {
        root: './web-application',
        package: './package.json',
        tsconfig: './tsconfig.json',
        snippetFolder: './.vscode/vetur/snippets',
        globalComponents: [
          './src/components/**/*.vue'
        ]
      }
    ]
  }