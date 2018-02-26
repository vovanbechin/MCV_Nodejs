const mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    name:{
        type:string,
        index:true
    },
    username:{
        type:string,
        index:true
    },
    Password:{
        type:string
    },
    email:{
        type:string
    },
    gender: {
        type:string
    },
    location:{
        type:string
    },
    created:{
        type: Date,
        "default": Date.now
    },
    updated:{
        type: Date,
        "default": Date.now
    }
})
var user = module.exports = mongoose.model('user',userSchema);// ten table cua user
module.export = {
    addUser: function(req,res){
        var response = {};
        var userData = new user();
        userData.name = req.body.name;
        userData.username= req.body.username;
        userData.Password= res.body.Password;
        userData.email = req.body.email;
        userData.gender = req.body.gender;
        userData.location = req.body.location;
        userData.created = new Date();
        userData.update = new Date();
        userData.save(function(err){
            if(err){
                 response = {"error":true, "message":"Error adding data"};   
            }else{
                res.redirect('/users')
            }
        })
    },
    getAlluser: function(req,res){
        var response = {};
        user.find(function(req,res){
            if(err){
                response= {"error":true, "message": "Erroe fetching data"};               
            } else {
                res.render('allUser',{user:data});
            }
        })
    },
    deleteUser : function (req,res){
        var response = {};
        user.findById(req.params.id,function(err){
            if(err){
                response = {"error":true, "message":"error deleting data"};
            }else{
                user.remove({_id:req.params.id},function(err){
                    if(err){
                        response - {"error":true, "message":"Error deleting data"};
                    }else {
                        res.redirect("/users");
                    }
                })
            }
        })
    },
    getUserById: function(req,res){
        var response = {};
        user.findById(res.params.id,function(err){
            if(err){
                response = {"error":true, "message": "error fetching data"};
            }else {
                res.render ('edituser', {user:data})
            }
        })
    },
    updateUser: function(req,res){
        var response = {};
        user.findById(req.params.id,function(err,dataUser){
            if(err){
                response = {"error":true,"message":"Error UpDateUser"};    
            }else{
                dataUser.name = req.body.name;
                dataUser.username = req.body.username;
                dataUser.Password = req.body.Password;
                dataUser.email= req.body.email;
                dataUser.gender = req.body.location;
                dataUser.location = req.body.location;
                dataUser.created = new Date();
                dataUser.update = new Date();
                dataUser.save(function(err){
                    if(err){
                        response = {"error":true,"message":"Error Updatind Data"};
                    }else{
                        res.redirect('/allUser');
                    }
                })
            }
        })
    }
    

}