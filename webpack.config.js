/**common.js node */

var path = require('path')
var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: "bundle.js",
        publicPath: "/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: "index.html"
        })
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader'], exclude: [/node_modules/, /dist/]},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'], exclude: [/node_modules/]},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'], exclude: [/node_modules/]},
            {
                test: /\.(png|jpg|jpeg|gif)$/, 
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[path]-[name]-[hash:6].[ext]'
                        }
                    }
                ], 
                exclude: [/node_modules/, /dist/]
            },
            {test: /\.js$/, use: ['babel-loader'], exclude: [/node_modules/, /dist/]}
        ]
    },
    devtool: 'cheap-module-eval-source-map'
}