var express = require('express');
var router = express.Router();

// Import connection con la DB
var config = require('../db/config.js');
var connection = config.connection

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with users');
});

module.exports = router;
