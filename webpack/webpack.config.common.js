const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    context: path.join(__dirname, './'),
    mode: !isDev ? 'production' : 'development',
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
            test: /\.js|\.jsx/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.(ttf|eot|svg|woff|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            exclude: /node_modules/,
            loader: "file-loader",
            options: {
                name: '[path][name].[hash].[ext]'
            }
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
