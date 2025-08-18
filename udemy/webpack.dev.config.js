const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // cleans the output directory before each build
const HtmlWebpackPlugin = require('html-webpack-plugin'); // generates an HTML file from a template

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development', // set mode to development for easier debugging
    devServer: {
        port: 9000,
        hot: true, // enable hot module replacement
        static: {
            directory: path.join(__dirname, 'dist'), // serve files from the dist directory
        },
        devMiddleware: {
            index: 'index.html', // serve index.html as the default file
            writeToDisk: true, // write files to disk, generatte dist folder
        },

    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset',
                // asset/resource < 8kb
                // asset/inline > 8kb
            },
            {
                test: /\.txt/,
                type: 'asset/source' // read txt abd return as string
            },
            {
                test: /\.css/,
                use: [
                    'style-loader', // injects styles into DOM
                    'css-loader' // resolves @import and url() paths in CSS files
                ]
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader' // compiles Handlebars templates
                ]
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(), // cleans the output directory before each build,
        new HtmlWebpackPlugin({
            title: 'Hello World',
            template: 'src/index.hbs', // template file to generate HTML
            description: 'This is a sample Webpack configuration handlbars',
        }) // generates an HTML file from a template
    ]
}