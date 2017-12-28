const path=require('path');

module.exports={
 entry:'./script.js',
 output:{ path:path.resolve(__dirname,''),filename:'bundled.js'},
 module:{
   loaders: [{
             test:/\.js?/,
             loader:'babel-loader',
             exclude:/node_modules/,
             query:{presets:['es2015','react']}
           }]
  }
  // , devServer: {
  //     inline:true,
  //     port: 8008
  //   }
}
