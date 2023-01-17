const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
    entry: {
        index: './src/index.js',
        // print: './src/print.js',
      },   
      devtool: 'inline-source-map',
      devServer: {
        static: './dist',
      },
    
      plugins: [
        new HtmlWebpackPlugin({
        //   title: 'Output Management',
          template: './src/index.html',
        }),
      ],
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
      optimization: {
        runtimeChunk: 'single',
      },
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
  mode: 'development',
};