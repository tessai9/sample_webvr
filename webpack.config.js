const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: {
    app: path.join(__dirname, "src", "app.js"),
    index: path.join(__dirname, "src", "index.js"),
  },
  output: {
    filename: "assets/js/[name]-[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      inject: "head"
    }),
    new CopyWebpackPlugin({
      from: "assets",
      to: "assets"
    }),
    new VueLoaderPlugin()
  ]
}
