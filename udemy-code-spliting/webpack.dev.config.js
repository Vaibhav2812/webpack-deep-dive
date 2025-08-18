const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // cleans the output directory before each build
const HtmlWebpackPlugin = require('html-webpack-plugin'); // generates an HTML file from a template

module.exports = {
    entry: {
        'hello-world': './src/hello-world.js', // entry point for the application
        'kiwi': './src/kiwi.js' // entry point for the Kiwi image component
    },
    output: {
        filename: '[name].js',
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
            filename: 'hello-world.html', // output file name
            chunks: ['hello-world'], // include only the hello-world entry point
            title: 'Hello World',
            template: 'src/page-template.hbs', // template file to generate HTML
            description: 'Hello world description',
        }), // generates an HTML file from a template
        new HtmlWebpackPlugin({
            filename: 'kiwi.html', // output file name
            chunks: ['kiwi'], // include only the hello-world entry point
            title: 'Kiwi',
            template: 'src/page-template.hbs', // template file to generate HTML
            description: 'Kiwi image description',
        }), // generates an HTML file from a template
    ]
}