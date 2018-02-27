const express = require('express');
const router = express.Router();
var app = express();

app.use('/user', require('./user'))
app.get('/', function(req,res){
    res.render('index',{title:'Home Page'})
})

app.get('/about', function(req,res){
    res.send('Learn about us');
})

module.exports = app;