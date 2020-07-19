const path = require('path')

module.exports = {
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
          // MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: 'asset/iconfont',
              outputPath: 'assets/icon'
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        // include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              esModule: false,
              name: '[name]-[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}
