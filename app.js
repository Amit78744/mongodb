const express = require('express');
const app = express();
const User = require('./users')

const bodyParser = require('body-parser');

const dbConnect = require('./config');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dbConnect();

app.get('/getAllUsers',async (req,res)=>{

    User.find({}, function(err,users){
        if(err) console.log(err);
    
        res.send(users);
    })
})

app.post('/createUser',async (req,res)=>{

    var result = await User.insertMany([req.body]);

    res.send(result);
})

app.listen(3000);
