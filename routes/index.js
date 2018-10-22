var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Middleton Film' });
});

// 
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Middleton Film' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Middleton Film' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Middleton Film' });
});

module.exports = router;
