const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');  // minifies JavaScript files
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // extracts CSS into separate files
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // cleans the output directory before each build
const HtmlWebpackPlugin = require('html-webpack-plugin'); // generates an HTML file from a template

module.exports = {
    entry: {
        'hello-world': './src/hello-world.js', // entry point for the application
        'kiwi-image': './src/kiwi.js' // entry point for the Kiwi image component
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production', // set mode to production for optimizations
    optimization: {
        splitChunks: {
            chunks: 'all', // split all chunks
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
            filename: '[name].[contenthash].css' // use contenthash for cache busting
        }), // extracts CSS into a separate file

        new CleanWebpackPlugin(), // cleans the output directory before each build,

        new HtmlWebpackPlugin({
            filename: 'hello-world-test.html', // output file name
            title: 'Hello World',
            chunks: ['hello-world'], // include only the hello-world entry point
            template: 'src/page-template.hbs', // template file to generate HTML
            description: 'Hello world description',
            minify: false, // minify the HTML output
        }), // generates an HTML file from a template

        new HtmlWebpackPlugin({
            filename: 'kiwi-image-test.html', // output file name
            title: 'Kiwi',
            chunks: ['kiwi-image'], // include only the kiwi-image entry point
            template: 'src/page-template.hbs', // template file to generate HTML
            description: 'Kiwing description',
            minify: false, // minify the HTML output
        }) // generates an HTML file from a template
    ]
}