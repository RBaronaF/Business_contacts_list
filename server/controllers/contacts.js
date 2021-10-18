/*
File name : server/controllers/contacts.js
Student’s Name : Ricardo Barona
StudentID : 301165198
Date : 2021-10-19
*/

let express = require('express');
let router = express.Router();

let Contacts = require('../models/contact');

module.exports.displayContactsListPage = (req, res, next) => {
    Contacts.find((err, contactList) => {
        if(err) {
            return console.error(err);
        }
        else {
            res.render('contacts/view', {title: 'Contacts List', ContactsList: contactList});      
        }
    });
}