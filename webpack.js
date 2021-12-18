const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { ProvidePlugin, HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    port: 5500,
    hot: true,
    allowedHosts: ['.loca.lt'],
  },
  entry: ['./src/index.js'],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  target: ['browserslist', 'es5'],
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.bundle.js',
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new ProvidePlugin({ React: 'react' }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new HotModuleReplacementPlugin(),
    new RefreshWebpackPlugin(),
  ],
};
