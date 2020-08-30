const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/client/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Managment'
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