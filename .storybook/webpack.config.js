const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.s?css$/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]-[hash:5]',
                            camelCase: true,
                        },
                    },
                    'sass-loader',],
                include: path.resolve(__dirname, "../")
            }
        ]
    }
};
