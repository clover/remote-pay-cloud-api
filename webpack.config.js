const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        "sdk": './index.js',
        "sdk.min": './index.js'
    },
    output: {
        path: path.join(__dirname, 'bundle'),
        filename: '[name].js',
        libraryTarget: 'var',
        library: 'sdk'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ]
};