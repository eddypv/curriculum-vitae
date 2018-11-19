const path = require('path')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebPackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')
const plugins =[
    new miniCssExtractPlugin({
        filename: "./css/[name].css",
        chunkFilename: "[id].css"
    }),
    new webpack.DllReferencePlugin({
        manifest:"./vendor-manifest.json"
    })
]

module.exports =(env)=>{
    
    plugins.push(
        new CleanWebPackPlugin(['dist'], {root:__dirname})
    )
    
    return {
        entry:{
            bundle:path.resolve(__dirname, "src/index.js")
        },
        output:{
            path:path.resolve(__dirname, "dist"),
            filename :'js/[name].js',
            publicPath:"https://eddypv.github.io/dist/", 
            chunkFilename:'js/[id].js'

        },
        optimization: {
            minimizer: [
                new UglifyJsPlugin(),
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        mode:'production',
        devServer:{
            port:9000
        },
        module: {
            rules: [
            {
                // test: que tipo de archivo quiero reconocer,
                // use: que loader se va a encargar del archivo
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react', 'stage-2'],
                }
                },
            },
            {
                test:/\.css$/,
                use:[
                    miniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    fallback: 'file-loader',
                    name: 'images/[name].[ext]'
                }
                }
            },

            ]
        },
        plugins
    }
}