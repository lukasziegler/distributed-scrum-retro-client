const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'appBundle.js',
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      exclude: /node_modules/,
      test: /\.js[x]?$/,
      query: {
        presets: ['es2015', 'react'],
      },
    }, {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader',
    }],
  },
};