const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
  entry: {
    index: path.join(__dirname, "src", "index.js"),
    objects: path.join(__dirname, "src", "objects.js")
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
      template: path.resolve(__dirname, "index.html")
    }),
    new VueLoaderPlugin()
  ]
}
