const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-number.js',
        clean: true,
        library: 'webpackNumbers'
        // globalObject: 'this',
        // library: {
        //     name: 'webpackNumbers',
        //     type: 'umd',
        // },
    }
}