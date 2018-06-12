const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: [
    'babel-polyfill',
    './src/serverRenderer.js',
  ],
  externals: [nodeExternals()],
  output: {
    filename: 'js/serverRenderer.js',
    libraryTarget: 'commonjs2',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.s?css$/,
      exclude: /node_modules/,
      include: /src/,
      use: [{
        loader: 'css-loader/locals',
        options: {
          modules: true,
          localIdentName: '[name]-[hash:5]',
          camelCase: true,
        },
      },
      'sass-loader',
      ],
    }],
  },
});
