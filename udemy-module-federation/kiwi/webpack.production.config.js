const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');  // minifies JavaScript files
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // extracts CSS into separate files
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // cleans the output directory before each build
const HtmlWebpackPlugin = require('html-webpack-plugin'); // generates an HTML file from a template
const { ModuleFederationPlugin } = require('webpack').container; // enables module federation

module.exports = {
    entry: './src/index.js', // entry point for the application
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/static/'
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
            filename: 'kiwi.html', // output file name
            title: 'Kiwi',
            template: 'src/page-template.hbs', // template file to generate HTML
            description: 'Kiwing description',
        }), // generates an HTML file from a template
        new ModuleFederationPlugin({
            name: 'KiwiApp',
            filename: 'remoteEntry.js',
            remotes: {
                'HelloWorldApp': 'HelloWorldApp@http://localhost:9001/remoteEntry.js'
            },
        })
    ]
}