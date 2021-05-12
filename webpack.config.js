const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

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

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './pages/index.js',
    about: './pages/about.js',
    analytics: './pages/analytics.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './scripts/[name].[chunkhash].js',
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
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: cssLoaders('postcss-loader'),
      },
      {
        test: /\.js$/,
        use: jsLoaders(),
        exclude: /node_modules/,
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
      template: './pages/index.pug',
      chunks: ['index'],
      filename: './index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HtmlWebpackPlugin({
      template: './pages/about.pug',
      chunks: ['about'],
      filename: './about.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HtmlWebpackPlugin({
      template: './pages/analytics.pug',
      chunks: ['analytics'],
      filename: './analytics.html',
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
