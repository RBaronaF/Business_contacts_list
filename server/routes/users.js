/*
File name : routes/users.js
Student’s Name : Ricardo Barona
StudentID : 301165198
Date : 2021-09-29
*/

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
