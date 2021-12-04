const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const packageJson = require("./package.json");

/**
 * @type import('webpack').Configuration
 */
const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8083/",
  },
  devServer: {
    port: 8083,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./DashBoardApp": path.join(__dirname, "src/bootstrap.js"),
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
