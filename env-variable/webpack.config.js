const path = require('path');

module.exports = (env) => {
    console.log('@@@@@@', env);
    return {
        mode: 'development',
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
        optimization: {
            usedExports: true,
        },
    }
}
