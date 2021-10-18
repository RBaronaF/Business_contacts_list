/*
File name : server/routes/users.js
Student’s Name : Ricardo Barona
StudentID : 301165198
Date : 2021-10-18
*/

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
