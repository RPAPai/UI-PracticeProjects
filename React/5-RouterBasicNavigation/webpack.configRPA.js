//import path from "./path";

var=require("webpack");
var path=require("path");

const DEST_DIR = path.resolve(__dirname,'dist');
const SRC_DIR = path.resolve(__dirname,'src');

cosnt config= {
    entry: './scripts.js' {
    output:{
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js'
    },

    module {
        loaders:{
        }
    },


},

    loaders:{};
    plugin{};
};
module.exports = config;
