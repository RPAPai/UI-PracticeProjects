var webpack = require('webpack');
var path=require('path');
module.exports={
    entry:'./script.js',
    output:{
        path:path.resolve(__dirname,''),
        filename: 'transpiled.js',
    },
    module:{
        loaders:[
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
            test:/\.js$/,
            loader:'babel-loader',
            exclude:/node_modules/,
            query:{
                presets: ['es2015','react']
            }
            // START WATCHING RECORDING FROM 52:00
        }]

    }
}

//