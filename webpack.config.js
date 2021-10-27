const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "/src/js/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js",
    publicPath: "/", // public URL of the output directory when referenced in a browser
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/pages/index.html"),
      inject: "body",
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    watchFiles: [
      "src/**/**/*.scss",
      "src/**/**/*.js",
      "src/**/**/*.html",
      "src/**/**/**/*.scss",
    ],
    liveReload: true,
    historyApiFallback: true,
    open: true,
    compress: true,
    port: 8080,
  },
};
