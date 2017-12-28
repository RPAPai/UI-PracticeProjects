/*var exp=require('express');
var Router=exp.Router();*/


var router =require('express').Router();
var path =require('path');

router.get("/",function(req,res){
    res.send("First  web server using express");
});

router.get('/subjects',function(req,res){
 //   res.sendFile('C:\\Roopa\\UI\\Practice\\Backend\\MyExpressServer1\\subject.html');
   res.sendFile(path.join(__dirname,'/..'+'/subject.html'));
});
module.exports=router;