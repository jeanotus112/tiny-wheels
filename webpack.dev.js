// const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: false,
    hot: true,
    contentBase: './',
    port: '8000',
    host: 'localhost',
    inline: true
  }
})
