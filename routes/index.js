var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Middleton Film' });
});

// 
router.get('/frontpage', function(req, res, next) {
  res.render('frontpage', { title: 'Middleton Film' });
});


module.exports = router;
