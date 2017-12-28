
var myUserModel= require('../Models/userModels'),
    myUserModelObj=new myUserModel();

//userController= function(){}
function userController(){}
userController.prototype.getAllUsers=function(req,res){
    myUserModelObj.getAllUsersModel(req,function(err,data){
        if(err) console.log("Error:"+err);
        res.send(data);
    })
};


userController.prototype.getUser=function(req,res){
    myUserModelObj.getUserModel(req.params.uname,function(err,data){
        if(err) console.log("Error:"+err);
        res.send(data);
    })
};


userController.prototype.createUser=function(req,res){
    myUserModelObj.createUserModel(req.body,function(err,data){
        if(err) console.log("Error:"+err);
        res.send('successfully Created User');
    })
};

userController.prototype.updateUser=function(req,res){
    myUserModelObj.updateUserModel(req.params.uname,req.body,function(err,data){
        if(err) console.log("Error:"+err);
        res.send('successfully Updated User');
    })
};

userController.prototype.deleteUser=function(req,res){
    myUserModelObj.deleteUserModel(req.params.uname,function(err,data){
        if(err) console.log("Error:"+err);
        res.send('successfully Deleted User');
    })
};


module.exports=userController;

/*

userRoutes.get('/',myUserControllerObj.getAllUsers.bind(myUserControllerObj));
userRoutes.get('/:uname',myUserControllerObj.getUser.bind(myUserControllerObj));
userRoutes.post('/',myUserControllerObj.createUser.bind(myUserControllerObj));
userRoutes.put('/:uname',myUserControllerObj.updateUser.bind(myUserControllerObj));
userRoutes.delete('/:uname',myUserControllerObj.deleteUser.bind(myUserControllerObj));*/
