const autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        './src/styles/stackImages.scss',
        './src/js/api-images.js'
    ],
    output: {
        filename: 'public/js/bundle.js',
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
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './public/js/[name].js',
                        },
                    },
                    {
                        loader: 'babel-loader'
                    }   
                ],
                
                query: {
                    presets: ['es2015'],
                },
            }
        ],
    },
};