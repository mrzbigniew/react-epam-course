const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        'react-hot-loader/patch',
        './index.js'
    ],
    mode: 'development',
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
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'React epam course',
            hash: true,
            template: './index.html'
        })
    ]
}
