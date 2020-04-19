const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    client: './src/client.js',
    bundle: './src/app/index.js'
  },
  output: {
    path: path.resolve(__dirname, './assets'),
    filename: '[name].js'
  },
  module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            { loader: 'sass-loader', options: { sourceMap: true } },
          ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }]
  },

  plugins: [
   new MiniCssExtractPlugin({
    filename: "styles.css"
   })
  ],
  resolve: {
    extensions: ['.js', '.scss', '.css']
  }
};