const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isDevMod = process.env.NODE_ENV === 'development';

const isDev = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
    name: 'client',
    target: 'web',
    entry: [
        isDev && 'webpack-hot-middleware/client',
        '../src/client.jsx'
    ].filter(Boolean),

    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                isDevMod ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[name]-[hash:5]',
                    },
                },
                'sass-loader'
            ],
        }, ],
    },

    plugins: [
        !isDevMod && new CleanWebpackPlugin('./public', {
            root: path.resolve(__dirname, '../')
        }),
        isDevMod && new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        })
    ].filter(Boolean),
});
