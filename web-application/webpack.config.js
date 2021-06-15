const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public/assets", to: "dest/assets" },
        { from: "public", to: "dest/public" }
      ]
    })
  ]
};
