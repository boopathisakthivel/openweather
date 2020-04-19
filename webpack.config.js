const webpack = require('webpack');
const path = require('path');
const HWP = require("html-webpack-plugin");

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js'
  },
  module: {
      rules: [{
        test: /\.(s*)css$/,
        use: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('sass-loader'),
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify('jo'),
      VERSION: JSON.stringify('5fa3b9'),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: '1+1',
      'typeof window': JSON.stringify('object'),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HWP({template: path.join(__dirname, 'public/index.html')})
  ],
  devServer: {
    writeToDisk: true
  }
};