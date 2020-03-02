const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: ["./src/index.js"],
  },
  output: {
    path: path.resolve(__dirname, "publish"),
    publicPath: "/",
    filename: "app/[name].js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "publish"),
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: {} }),
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
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: "pre",
        loader: "eslint-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|pdf)$/,
        loader: "file-loader",
        options: {
          outputPath: "assets",
          name: "[hash:8].[ext]",
        },
      },
      {
        test: /\.(config|ico)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
};
