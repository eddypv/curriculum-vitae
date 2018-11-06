const path = require('path')

module.exports ={
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
        publicPath:"http://localhost:8080/dist/" 
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/(node_modules)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['es2015', 'react', 'stage-2']
                    }
                }
            },
            {
                test:/\.(png|jpg|gif|svg)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        fallback:'file-loader',
                        limit:1000,
                        name:'images/[name].[ext]'

                    }
                }
            }
        ]
    }
}