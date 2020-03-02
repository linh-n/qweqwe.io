const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

const baseConfig = require("./webpack.config.js");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "publish"),
    publicPath: "/",
    filename: "app/[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./public/template.prod.html`,
    }),
    new WorkboxPlugin.InjectManifest({
      swSrc: path.resolve(__dirname, "public/service-worker.js"),
      swDest: "sw.js",
    }),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 5120,
      minRatio: 0.8,
    }),
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
});
