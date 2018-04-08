const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    host: '0.0.0.0',
    port: 9000,
    compress: true,
    // open: true,
    hot: true,
    historyApiFallback: true,
  },
  output: {
    filename: 'bundle.js',
    publicPath: IS_PRODUCTION ? '/programming-with-berta/' : '/',
    path: path.resolve(__dirname, 'docs'),
  },
  resolve: {
    alias: {
      Root: path.resolve(__dirname, 'src/'),
      Berta: path.resolve(__dirname, 'src/BERTA/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Pages: path.resolve(__dirname, 'src/pages/'),
      HOCS: path.resolve(__dirname, 'src/HOCs/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(['docs']),
    !IS_PRODUCTION && new webpack.NamedModulesPlugin(),
    !IS_PRODUCTION && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.html$/,
        loaders: [
          'html-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
              convertToAbsoluteUrls: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]_[hash:base64:5]',
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:4].[ext]',
            },
          }
        ],
      },
    ],
  },
};
