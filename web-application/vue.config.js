const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  transpileDependencies: ["vuetify"],
  runtimeCompiler: true,
  css: {
    extract: false
  },
};


