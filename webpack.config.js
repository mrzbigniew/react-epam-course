const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function (env, options) {
  const isProduction = options.mode === 'production';

  const commonPlugins = [
    new HtmlWebpackPlugin({
      title: 'React epam course',
      hash: true,
      template: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ];

  const devPlugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ].concat(commonPlugins);

  const prodPlugins = [].concat(commonPlugins);

  const config = {
    context: path.join(__dirname, 'src'),
    mode: isProduction ? 'production' : 'development',
    entry: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './index.jsx',
    ],
    output: {
      path: `${__dirname}/dist`,
      publicPath: '/',
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: '/dist/',
      hot: true,
      historyApiFallback: true,
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      }, {
        test: /\.scss/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]-[hash:5]',
              camelCase: true,
            },
          },
          'sass-loader',
        ],
      }, {
        test: /\.(ttf|eot|svg|woff|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      }],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: isProduction ? prodPlugins : devPlugins,
    optimization: isProduction ? {
      minimize: true,
      splitChunks: {
        cacheGroups: {
          commons: {
            name: 'commons',
            chunks: 'all',
            minSize: 0,
            minChunks: 2,
          },
        },
      },
    } : {},
    devtool: isProduction ? false : 'source-map',
  };

  return config;
};
