const path = require('path');

module.exports = {
  entry: './frontend/todo_redux.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        }
      }
    ]
  }
};