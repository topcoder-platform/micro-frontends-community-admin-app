/* global __dirname process */
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");
const autoprefixer = require("autoprefixer");

const cssLocalIdent =
  process.env.APPMODE === "production"
    ? "[hash:base64:6]"
    : "community_admin_[path][name]___[local]___[hash:base64:6]";

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "topcoder",
    projectName: "micro-frontends-community-admin-app",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    output: {
      // path: path.resolve(__dirname, 'dist'),
      publicPath: "community-admin-app",
    },
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          /* Loads SCSS stylesheets. */
          test: /\.scss/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: cssLocalIdent,
                  auto: true,
                },
              },
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [autoprefixer],
                },
              },
            },
            "resolve-url-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          oneOf: [
            {
              exclude: [/node_modules/],
              loader: "babel-loader",
            },
            {
              exclude: [/node_modules/],
              loader: require.resolve("file-loader", { paths: [__dirname] }),
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        styles: path.resolve(__dirname, "src/styles"),
        components: path.resolve(__dirname, "src/components"),
        hooks: path.resolve(__dirname, "src/hooks"),
        utils: path.resolve(__dirname, "src/utils"),
        constants: path.resolve(__dirname, "src/constants"),
        services: path.resolve(__dirname, "src/services"),
        hoc: path.resolve(__dirname, "src/hoc"),
      },
    },
    plugins: [
      // ignore moment locales to reduce bundle size by 64kb gzipped
      // see solution details https://stackoverflow.com/questions/25384360/how-to-prevent-moment-js-from-loading-locales-with-webpack/25426019#25426019
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
  });
};
