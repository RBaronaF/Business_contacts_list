/*
File name : server/models/user.js
Student’s Name : Ricardo Barona
StudentID : 301165198
Date : 2021-10-18
*/

let mongoose = require('mongoose');

// create a model class
let userModel = mongoose.Schema({
    username : String,
    password : String,
    email : String
},
{
    collection: "users"
});

module.exports = mongoose.model('User', userModel);