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
router.get('/', contactsController.displayContactsListPage);

/* GET Contacts View page. */
router.get('/view', requireAuth, contactsController.displayContactsListPage);

/* GET Contact Edit page. */
router.get('/edit/:id', requireAuth, contactsController.displayContactEditPage);

/* Post Contact Edit page. */
router.post('/edit/:id', requireAuth, contactsController.processContactEdit);

/* Post Contact delete. */
router.get('/delete/:id', requireAuth, contactsController.performDelete);


// helper function for guard purposes
function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

module.exports = router;