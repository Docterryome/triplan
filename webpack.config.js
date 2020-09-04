const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/client/js/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets: true}),
        new HtmlWebpackPlugin({
            template: './src/client/index.html',
            title: 'Triplins'
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