const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const { ModuleFederationPlugin } = require("webpack").container;

/**
 * @type import('webpack').Configuration
 */
const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteMarketing",
      exposes: {
        Marketing: "./src/bootstrap.js",
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
