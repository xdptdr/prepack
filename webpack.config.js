const webpack = require('webpack');

 module.exports = {
     entry: './index.js',
     output: {
         filename: 'prepack.js',
         libraryTarget: 'amd'
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
 };