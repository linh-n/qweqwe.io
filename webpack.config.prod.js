const path = require("path");
const merge = require("webpack-merge");
const config = require("./webpack.config.js");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = merge(config, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "publish"),
    publicPath: "/",
    filename: "app/[name].js",
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: {} }),
    new HtmlWebpackPlugin({
      template: `./public/template.prod.html`,
    }),
    new WorkboxPlugin.InjectManifest({
      swSrc: path.resolve(__dirname, "public/service-worker.js"),
      swDest: "sw.js",
      exclude: ["web.config", ".htaccess", "*.gz"],
    }),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 5120,
      minRatio: 0.8,
    }),
  ],
});
