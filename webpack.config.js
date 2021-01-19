const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        "sdk": './index.js'
    },
    output: {
        path: path.join(__dirname, 'bundle'),
        filename: '[name].js',
        libraryTarget: 'var',
        library: 'sdk'
    }
};