const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        bi: './src/styles/best-images.scss',
        bestImages: './src/js/best-images.js',
        tf: './src/styles/twitter-favorites.scss',
        twitterFavorites: './src/js/twitter-favorites.js'
    },
    output: {
        filename: './public/js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './public/styles/[name].css',
                        },
                    },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()],
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules'],
                        },
                    }
                ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env'],
                },
            }
        ],
    }
};