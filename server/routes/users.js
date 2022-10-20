
/*Assignment 1, Section 008, Nanjin Wang, 301243786, October 2nd, 2022*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;