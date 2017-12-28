var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var userSchema=new Schema({"name":String});

// users is my collection name in mongoose db
user=mongoose.model("users",userSchema);

function userModel(){}

userModel.prototype.getAllUsersModel=function(req,callback){
    user.find({},function(err,data){
        if(err) callback(err,null);
        callback(null,data);
    })
};

userModel.prototype.getUserModel=function(uname,callback){


    user.find({"name":uname},function(err,data){
        if(err) callback(err,null);
        callback(null,data);
    })
};


userModel.prototype.createUserModel=function(body,callback){
    user.create(body,function(err,data){
        if(err) callback(err,null);
        callback(null,data);
    })
};


userModel.prototype.updateUserModel=function(uname,body,callback){
    user.update({"name":uname},body,function(err,data){
        if(err) callback(err,null);
        callback(null,data);
    })
};
userModel.prototype.deleteUserModel=function(uname,callback){
    user.remove({"name":uname},function(err,data){
        if(err) callback(err,null);
        callback(null,data);
    })
};
//
module.exports=userModel;