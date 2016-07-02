const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './index.js',
    html: './index.html'
  },

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  // Configuration for dev server
  devServer: {
    contentBase: 'dist',
    port: 3000
  },

  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['react', 'es2015', 'react-hmre']
        }
      },
      {
        test: /\.html$/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  }
};
