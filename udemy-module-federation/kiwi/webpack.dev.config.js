const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // cleans the output directory before each build
const HtmlWebpackPlugin = require('html-webpack-plugin'); // generates an HTML file from a template
const { ModuleFederationPlugin } = require('webpack').container; // enables module federation

module.exports = {
    entry: './src/index.js', // entry point for the application
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:9002/'
    },
    mode: 'development', // set mode to development for easier debugging
    devServer: {
        port: 9002,
        static: {
            directory: path.join(__dirname, 'dist'), // serve files from the dist directory
        },
        devMiddleware: {
            index: 'kiwi.html', // serve index.html as the default file
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
            filename: 'kiwi.html', // output file name
            title: 'Kiwi',
            template: 'src/page-template.hbs', // template file to generate HTML
            description: 'Kiwi image description',
        }), // generates an HTML file from a template
        new ModuleFederationPlugin({
            name: 'KiwiApp',
            filename: 'remoteEntry.js',
            exposes: {
                './KiwiPage': './src/components/kiwi-page/kiwi-page.js'
            }
        })
    ]
}