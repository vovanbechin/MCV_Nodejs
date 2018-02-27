const express = require('express');
const bodyParser= require('body-parser');
const mongoose=require('mongoose');
const app = express();
const exphbs = require('express-handlebars');

const path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));
app.set('views', path.join(__dirname, '/views'));
app.engine('handlebars', exphbs({ defaultLayout: 'layout' }));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.use(require('./controllers'));

mongoose.connect('mongodb://localhost:27017/demo',function(err){
    if(err){
        console.log('Unable to connect to Mongo');
        process.exit(1);
    }else {
        var db = mongoose.connection;
        app.listen(3000,function(){
            console.log('listening on port 3000...');
        })
    }
})