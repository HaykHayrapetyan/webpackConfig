const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
     entry: [
        'webpack-hot-middleware/client',
        './source/app.js'
     ],
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js',
         publicPath: '/'
     },

     plugins: [
         new htmlWebpackPlugin({
             template: './page.html',
             inject: 'body'
         }),
         new webpack.HotModuleReplacementPlugin()
     ],

      module: {
        rules: [{
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }]
    },
   // watch: true
    
 };