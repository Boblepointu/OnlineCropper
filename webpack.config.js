const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'www/build');
const APP_DIR = path.resolve(__dirname, 'www/src');

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx$/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
          test: /\.css$/,
          loaders: [
              'style-loader?sourceMap',
              'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
          ]
      },
      {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
      }
    ]
  }
};
