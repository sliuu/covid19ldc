const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const path = require("path");

const debug = process.env.NODE_ENV !== 'production';
//const assetPrefix = debug ? '' : '/covid19ldc/';

module.exports = withPlugins([[withSass], [withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    config.module.rules.push({
      test: /\.csv$/,
      loader: 'raw-loader',
    });
    return config;
  },
  assetPrefix: '/covid19ldc',
  basePath: '/covid19ldc',
});
