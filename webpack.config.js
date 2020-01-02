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
            {
                test: /\.css$/, 
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:5]',
                            },
                            sourceMap: true,
                            
                        }
                    }
                ], 
                exclude: [/node_modules/, /dist/]
            },
            {test: /\.less$/, use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: '[path][name]__[local]--[hash:5]',
                    },
                    sourceMap: true,
                    
                }
            }, 'less-loader'], exclude: [/node_modules/]},
            {test: /\.scss$/, use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: '[path][name]__[local]--[hash:5]',
                    },
                    sourceMap: true,
                    
                }
            }, 'sass-loader'], exclude: [/node_modules/]},
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
            {test: /\.jsx?$/, use: ['babel-loader', 'lazyload-loader'], exclude: [/node_modules/, /dist/]}
        ]
    },
    devtool: 'cheap-module-eval-source-map'
}