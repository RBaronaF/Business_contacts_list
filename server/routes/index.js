/*
File name : server/routes/index.js
Student’s Name : Ricardo Barona
StudentID : 301165198
Date : 2021-10-18
*/

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* Get Login Page */
router.get('/login', indexController.displayLoginPage);

/* Authentication */
router.post('/authentication', indexController.loginAuthentication);

/* Logout */
router.get('/logout', indexController.logoutProcess); 

module.exports = router;
