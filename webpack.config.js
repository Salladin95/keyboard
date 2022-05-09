const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = ({ development }) => ({
  // Set the mode to development or production
  mode: "development",

  // Control how source maps are generated
  devtool: "inline-source-map",

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  entry: {
    index: "./src/main/index.js",
  },
  output: {
    filename: "./js/[name].js",
    path: path.resolve("../", "dist"),
    assetModuleFilename: "assets/images/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.svg$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/svg/[name][ext]",
        },
        use: "svgo-loader",
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/assets",
          to: "assets",
          noErrorOnMissing: true,
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: ({ chunk }) => `./css/${chunk.name}.css`,
    }),
    new HtmlWebpackPlugin({
      template: "./src/main/index.html",
      inject: true,
      chunks: ["index"],
      filename: "./index.html",
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: ["**/*", "!.git"],
    }),
  ],
  resolve: {
    extensions: [".js"],
  },
});
