// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');
const paths = require('../config/paths');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader", // compiles Sass to CSS
            options: {
              includePaths: [paths.globalStyles]
            }
        }],
        include: path.resolve(__dirname, '../')
     },
     {  test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: __dirname
     },
     {
      test: /\.(ts|tsx)$/,
      loader: require.resolve('ts-loader'),
     },
     {
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      loader: require.resolve('url-loader'),
      options: {
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]',
      },
     } 
    ],
  },
  resolve: {
     extensions: [
      '.web.ts',
      '.ts',
      '.web.tsx',
      '.tsx',
      '.web.js',
      '.js',
      '.json',
      '.web.jsx',
      '.jsx',
    ]
  },
};