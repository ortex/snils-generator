var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: __dirname + '/dist/',
    publicPath: '/dist/',
    filename: '[name].js'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file?name=img/[name].[ext]'
      },
      {
        test: /.*font.*\.(otf|eot|svg|ttf|woff|woff2)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
}