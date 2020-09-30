const path = require('path');

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
    }
};