const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        'react-hot-loader/patch',
        './index.jsx'
    ],
    // mode: 'development',
    // devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [{
            test: /\.js|\.jsx/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.js/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
        }, {
            test: /\.scss/,
            exclude: /node_modules/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React epam course',
            hash: true,
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
