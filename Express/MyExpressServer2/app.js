var app=require("express")();
var myUserRouter=require("./Routes/userRoutes");
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var auth=require("./config.json");

mongoose.connect('mongodb://'+auth.mongodb.user+':'+auth.mongodb.pwd+'@ds115124.mlab.com:15124/practice_db1');
//mongoose.connect('mongodb://pai:pai123@ds115124.mlab.com:15124/practice_db1');

mongoose.connection.on("connected",function(){
    console.log("connected to mongoose db");
});

mongoose.connection.on("error",function(){
    console.log("NOT connected to mongoose db");
});

app.use(bodyParser.json());
app.use('/',myUserRouter);

app.listen(8080,function(err,data){
    if(err) console.log("Eroor loading");
    console.log("loaded successfully");
})