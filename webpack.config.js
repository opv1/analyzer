const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  ]

  return loaders
}

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '../',
      },
    },
    'css-loader',
    'sass-loader',
  ]

  if (extra) {
    loaders.push(extra)
  }

  return loaders
}

const jsFileName = (pathData) => {
  if (pathData.runtime === 'index') {
    return './[name].[chunkhash].js'
  } else {
    return './pages/[name].[chunkhash].js'
  }
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.js',
    about: './pages/about.js',
    analytics: './pages/analytics.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: (pathData) => jsFileName(pathData),
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    open: true,
    hot: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin({ exclude: /node_modules/ })],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: jsLoaders(),
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: cssLoaders('postcss-loader'),
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        loader: 'file-loader',
        options: {
          name: './assets/images/[name].[ext]',
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: './assets/fonts/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      chunks: ['index'],
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HtmlWebpackPlugin({
      template: './pages/about.html',
      filename: './pages/about.html',
      chunks: ['about'],
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HtmlWebpackPlugin({
      template: './pages/analytics.html',
      filename: './pages/analytics.html',
      chunks: ['analytics'],
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new MiniCssExtractPlugin({
      filename: './styles/[name].[chunkhash].css',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
  ],
}
