const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    mode: !isDev ? 'production' : 'development',
    output: {
        filename: 'js/[name].js',
        path: path.resolve('./public')
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: !isDev ? false : 'source-map',
    plugins: [
        isDev ? new webpack.NamedModulesPlugin() : new webpack.HashedModuleIdsPlugin(),
    ],
}
