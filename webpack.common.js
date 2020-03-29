const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'tiny-wheels.min.js',
    libraryTarget: 'umd',
    library: 'tiny-wheels'
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new MiniCssExtractPlugin({
      filename: 'tiny-wheels.min.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}
