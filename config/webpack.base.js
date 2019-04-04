const { VueLoaderPlugin } = require('vue-loader');
const path                = require('path');
const HtmlWebpackPlugin   = require('html-webpack-plugin');
const CleanWebpackPlugin  = require('clean-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|ttf)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      inject: false
    }),
    new CleanWebpackPlugin(
      ['dist'],
      { root: path.resolve(__dirname, '..') }
    )
  ],
  resolve: {
    alias : {
      Sections   : path.resolve(__dirname, '../src/sections'),
      Components : path.resolve(__dirname, '../src/components'),
      Wrappers   : path.resolve(__dirname, '../src/wrappers'),
      Helpers    : path.resolve(__dirname, '../src/helpers'),
      Utils      : path.resolve(__dirname, '../src/utils')
    },
    extensions: [ '*', '.js', '.vue', '.css', '.scss' ]
  }
};
