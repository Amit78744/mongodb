const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: String,
    surname: String,
    city: String
});

module.exports = mongoose.model('users', usersSchema);