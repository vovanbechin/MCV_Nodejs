const express = require('express');
const router = express.Router();

router.use('/use',require('./user'))

router.get('/',function(req,res){
    res.render('index',{title:'Home Page'})
})

router.get('/about', function(req,res){
    res.send('Learn about us');
})
