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

router.get('/cycles', function(req, res, next) {
  res.render('cycles', { title: 'Middleton Film' });
});

router.get('/thefisherman', function(req, res, next) {
  res.render('thefisherman', { title: 'Middleton Film' });
});

router.get('/nightshift', function(req, res, next) {
  res.render('nightshift', { title: 'Middleton Film' });
});

router.get('/ihearwaves', function(req, res, next) {
  res.render('ihearwaves', { title: 'Middleton Film' });
});

router.get('/loaf', function(req, res, next) {
  res.render('loaf', { title: 'Middleton Film' });
});

router.get('/welcomehome', function(req, res, next) {
  res.render('welcomehome', { title: 'Middleton Film' });
});

module.exports = router;
