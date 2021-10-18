/*
File name : server/models/contact.js
Student’s Name : Ricardo Barona
StudentID : 301165198
Date : 2021-10-19
*/

let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    contact_name : String,
    contact_number : String,
    contact_email : String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('contact', contactModel);