var express = require('express');
var Authentication = require('../authentication');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello World!');
});

router.get('/protected',  Authentication.BasicAuthentication, function(req, res, next) {
  res.send('Protected!');
});

module.exports = router;
