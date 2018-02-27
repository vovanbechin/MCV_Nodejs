const express = require('express');
const router = express.Router();
const userData = require('../models/user');
router.get('/users',userData.getAllUser);
router.get('/add',function(req,res){
    res.render('addUser');
})
router.post('/add',userData.addUser);
router.get('/delete/:id',userData.deleteUser);

router.get('/edit/:id',userData.getUserById);
router.post('/edit/:id',userData.updateUser);
module.exports=router;