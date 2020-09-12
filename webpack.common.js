const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/client/js/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets: true}),
        new HtmlWebpackPlugin({
            template: './src/client/index.html',
            title: 'Triplins'
        }),
        new Dotenv()
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