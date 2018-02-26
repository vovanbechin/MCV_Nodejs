var express = require('express');
mongoose=require('mongoose');
app = express();

app.user(require('./controllers'));
// app.listen(3000,function(){
//     console.log('listening on port 3000');
// })

mongoose.connect('mongodb://localhost:27017/UserImg',function(err){
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