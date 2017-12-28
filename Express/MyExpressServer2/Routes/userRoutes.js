var userRoute = require("express").Router(),
    myUserController=require('../Controllers/userControllers'),
    myUserControllerObj=new myUserController();

userRoute.get('/',myUserControllerObj.getAllUsers.bind(myUserControllerObj));

userRoute.get('/:uname',myUserControllerObj.getUser.bind(myUserControllerObj));

userRoute.post('/',myUserControllerObj.createUser.bind(myUserControllerObj));

userRoute.put('/:uname',myUserControllerObj.updateUser.bind(myUserControllerObj));

userRoute.delete('/:uname',myUserControllerObj.deleteUser.bind(myUserControllerObj));

module.exports = userRoute;

/*
// THis is OLD VERSION handling IN ROUTES only

router.get("/",function(req,res){
    res.send("First  web server using express");
});


router.get('/subjects',function(req,res){
    //   res.sendFile('C:\\Roopa\\UI\\Practice\\Backend\\MyExpressServer1\\subject.html');
    res.sendFile(path.join(__dirname,'/..'+'/subject.html'));
});*/
