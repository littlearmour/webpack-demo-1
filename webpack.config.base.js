const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "fan",
      template: "src/assets/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.styl$/,
        loader: ["style-loader", "css-loader", "stylus-loader"],
      },
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader", //把js的字符串转换成style标签
          "css-loader", //把css代码准换成js的字符串
          {
            loader: "sass-loader", //sass-loader就是把sass的代码转化成css代码
            options: {
              implementation: require("dart-sass"),
            },
          },
        ],
      },
    ],
  },
};
