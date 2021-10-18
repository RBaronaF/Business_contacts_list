/*
File name : server/routes/contacts.js
Student’s Name : Ricardo Barona
StudentID : 301165198
Date : 2021-10-19
*/

let express = require('express');
let router = express.Router();

let contactsController = require('../controllers/contacts');

/* GET Contacts View page. */
router.get('/', requiredAuth, contactsController.displayContactsListPage);

/* GET Contacts View page. */
router.get('/view', requiredAuth, contactsController.displayContactsListPage);

/* GET Contact Edit page. */
router.get('/edit/:id', requiredAuth, contactsController.displayContactEditPage);

/* Post Contact Edit page. */
router.post('/edit/:id', requiredAuth, contactsController.processContactEdit);

/* Post Contact delete. */
router.get('/delete/:id', requiredAuth, contactsController.performDelete);


/* Authentication */
function requiredAuth(req, res, next) {
    if(req.session.loggedin) {
        next()
    } else {
        req.flash('success', 'Please login first!');
        res.redirect('/login')
    }
}

module.exports = router;