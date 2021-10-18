/*
File name : server/controllers/index.js
Student’s Name : Ricardo Barona
StudentID : 301165198
Date : 2021-10-18
*/

let express = require('express');
let router = express.Router();

let User = require('../models/user');

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home', reqs: req} );
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About', reqs: req });
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('index', { title: 'Projects', reqs: req });
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services', reqs: req });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('index', { title: 'Contact', reqs: req });
}

module.exports.displayLoginPage = (req, res, next) => {
    res.render('login/login', { title: 'Login' });
}

module.exports.loginAuthentication = (req, res, next) => {
    let uname = req.body.username;
    let pwd = req.body.password;

    User.findOne({username: uname, password: pwd}, (err, oneUser) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else if(!oneUser) {
            req.flash('error', 'Please insert Username and Password, correctly!')
            res.redirect('/login')
        } else {
            req.session.loggedin = true;
            res.redirect('/home');
        }
    });
}

module.exports.logoutProcess = (req, res, next) => {
    req.flash('success', 'Login Again Here');
    req.session.destroy(function(error) {
        res.redirect('/home');
    });
}