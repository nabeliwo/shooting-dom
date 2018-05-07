const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const isDevelopment = process.env.NODE_ENV === 'development'

const baseConfig = {
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist'),
    publicPath: '/dist',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
}
const devConfig = {
  entry: ['react-hot-loader/patch', './src/js/main.jsx'],
  devtool: 'source-map',
  devServer: {
    contentBase: './',
    port: 3000,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
const prdConfig = {
  entry: './src/js/main.jsx',
}

module.exports = merge(baseConfig, isDevelopment ? devConfig : prdConfig)
