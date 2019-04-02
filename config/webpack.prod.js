const merge                   = require('webpack-merge');
const base                    = require('./webpack.base');
const { EnvironmentPlugin }   = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');

module.exports = merge(base, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new OptimizeCssAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new EnvironmentPlugin(['CONTENTFUL_SPACE_ID', 'CONTENTFUL_ACCESS_TOKEN'])
  ]
});
