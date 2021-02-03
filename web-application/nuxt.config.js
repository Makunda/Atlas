export default config: Configuration {
    buildModules: [
      ['@nuxt/typescript-build', {
        typeCheck: {
          memoryLimit: 4096,
          workers: 2
        },
        ignoreNotFoundWarnings: false
      }]
    ]
  }