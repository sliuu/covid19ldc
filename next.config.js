const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const path = require("path");

const assetPrefix = process.env.NODE_ENV !== "production" ? "" : "/covid19ldc";

module.exports = withPlugins([[withSass], [withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    config.module.rules.push({
      test: /\.csv$/,
      loader: "raw-loader",
    });
    return config;
  },
  assetPrefix: assetPrefix,
  basePath: assetPrefix,
});
