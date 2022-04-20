const express = require('express');
const app = express();
const User = require('./users')

const mongoose = require('mongoose');
const users = require('./users');

mongoose.connect("mongodb://amit:4VujvdA27MrSMkZC@cluster0-shard-00-00.rasir.mongodb.net:27017,cluster0-shard-00-01.rasir.mongodb.net:27017,cluster0-shard-00-02.rasir.mongodb.net:27017/testmongodb?ssl=true&replicaSet=atlas-flzxpn-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.warn("db connection succesfully.")
    }).catch((err) => {
        console.log("error", err)
})

User.find({}, function(err,users){
    if(err) console.log(err);

    console.log(users)
})

