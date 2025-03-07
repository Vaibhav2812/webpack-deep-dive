const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts', // Ensure this points to your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Allow imports without file extensions
  },
  mode: 'development', // Change to 'production' for optimized builds,
  plugins: [
        new HtmlWebpackPlugin({
            title: 'typescript'
        })
  ]
};
