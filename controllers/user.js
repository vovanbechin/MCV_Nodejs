var express = require('express');
var router = express.Router();
var passport = require('passport');
var userData = require('../models/user');
router.get('/users',userData.getAlluser);
router.get('/user/add',function(req,res){
    res.render('addUser');
})
router.post('/user/add',userData.addUser);
router.get('/user/delete/:id',userData.deleteUser);

router.get('/user/edit/:id',userData.getUserById);
router.post('/user/edit/:id',userData.updateUser);
module.exports=router;