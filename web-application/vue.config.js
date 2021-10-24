const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  transpileDependencies: ["vuetify"],
  parallel: 4,
  runtimeCompiler: true,
  css: {
    extract: false
  }
};
