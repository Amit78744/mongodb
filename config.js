const mongoose = require('mongoose');
const database = 'testmongodb';

//const url = "mongodb://amit:4VujvdA27MrSMkZC@cluster0-shard-00-00.rasir.mongodb.net:27017,cluster0-shard-00-01.rasir.mongodb.net:27017,cluster0-shard-00-02.rasir.mongodb.net:27017/"+database+"?ssl=true&replicaSet=atlas-flzxpn-shard-0&authSource=admin&retryWrites=true&w=majority";

//const url = "mongodb://Amit:Amit78744@13.233.30.200:27017/?authMechanism=DEFAULT"

const url = 'mongodb://Amit:Amit78744@13.235.146.10:27017/?authSource=admin'

async function dbConnect()
{
    mongoose.connect(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("db connection succesfully.")
        return;
    }).catch((err) => {
        console.log("error :-", err)
    })

}

module.exports  = dbConnect;