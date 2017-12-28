/*
var exp = require("express");
var app=exp();
*/
// above two lines same as the following line
var app=require('express')();

app.get("/",function(req,res){
    res.send("First  web server using express");
});

app.get('/subjects',function(req,res){
   res.sendFile(__dirname+'/subject.html');
});

app.listen(8080,function(err,data){
    if(err){
        console.log(err);
    } console.log("Page Loaded successfully")
});

