const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const isDevelopment = process.env.NODE_ENV === 'development'

const baseConfig = {
  entry: {
    bundle: './src/js/main.js'
  },
  output: {
    path: path.join(__dirname, './dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
}
const devConfig = {
  devtool: 'source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
const prdConfig = {}

module.exports = merge(baseConfig, isDevelopment ? devConfig : prdConfig)