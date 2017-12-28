const path=require('path');

module.exports={
 entry:'./script.js',
 output:{ path:path.resolve(__dirname,''),filename:'bundled.js'},
 module:{
   loaders: [{
             test:/\.js?/,
             loader:'babel-loader',
             exclude:/node_modules/,
             query:{presets:['env','react']}
      //     query:{presets:['env','react','eslint-plugin-react']}
           },
           {
            //         test:/\.css$/,
              //       exclude:/node_modules/,
          //           loader:'style-loader!css-loader'

                   }
         ]
      },
      devServer:{
        historyApiFallback: true,
    }

}
