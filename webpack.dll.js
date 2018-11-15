const path = require('path')
const webpack = require('webpack')

module.exports ={
    entry:{
        vendor:[
            "react",
            "react-dom"
        ]
    },
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:"js/[name].js",
        library:"[name]"
    },
    plugins:[
        new webpack.DllPlugin({
            name:"[name]",
            path:path.resolve(__dirname, "[name]-manifest.json")
        })
    ]

}