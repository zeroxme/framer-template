'use strict';

let path = require('path');

module.exports = {
  entry: {
    main: path.resolve('./src/app.js')
  },

  output: {
    filename: 'app.js',
    path: path.resolve('./public')
  },

  devtool: 'source-map',

  devServer: {
    compress: true,
    port: 3000,
    host: '0.0.0.0'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};