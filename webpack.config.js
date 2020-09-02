const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/client/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtools: 'inline-source-map',
    devserver: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets: true}),
        new HtmlWebpackPlugin({
            title: 'Triplin'
        })
    ],
    module: {
        rules : [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']   
            }
        ]
    }
}