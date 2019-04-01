const path   = require('path');
const merge  = require('webpack-merge');
const base   = require('./webpack.base');
const Dotenv = require('dotenv-webpack');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        use: [
          'vue-style-loader',
          'css-loader'
        ],
        test: /\.css$/
      }
    ]
  },
  plugins: [ new Dotenv() ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    historyApiFallback: true,
    port: 3000
  }
});
