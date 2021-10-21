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
    let mysort = { contact_name : 1 }
    Contacts.find((err, contactList) => {
        if(err) {
            return console.error(err);
        }
        else {
            res.render('contacts/view', {title: 'Contacts List', ContactsList: contactList, displayName: req.user ? req.user.displayName : '' });      
        }
    }).sort(mysort);
}

module.exports.displayContactEditPage = (req, res, next) => {
    let id = req.params.id;

    Contacts.findById(id, (err, contactToEdit) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('contacts/view', {title: 'Edit Contact', Contact: contactToEdit })
        }
    });
}

module.exports.processContactEdit = (req, res, next) => {
    let id = req.params.id

    let updateContact = Contacts({
        "_id": id,
        "contact_name": req.body.name,
        "contact_number": req.body.contact_number,
        "email": req.body.email
    });

    Contacts.updateOne({_id: id}, updateContact, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contacts-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contacts.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
             res.redirect('/contacts-list');
        }
    });
}