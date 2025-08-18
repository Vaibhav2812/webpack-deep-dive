const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');  // minifies JavaScript files
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // extracts CSS into separate files
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // cleans the output directory before each build
const HtmlWebpackPlugin = require('html-webpack-plugin'); // generates an HTML file from a template

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production', // set mode to production for optimizations
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
                    MiniCssExtractPlugin.loader, // injects styles into DOM
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
        new TerserPlugin(), // minifies JavaScript files
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }), // extracts CSS into a separate file
        new CleanWebpackPlugin(), // cleans the output directory before each build,
        new HtmlWebpackPlugin({
            title: 'Hello World',
            template: 'src/index.hbs', // template file to generate HTML
            description: 'This is a sample Webpack configuration handlbars',
        }) // generates an HTML file from a template
    ]
}