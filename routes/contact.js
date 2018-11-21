var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var db = mysql.createConnection({
  host    : '142.93.73.235',
  port    : '3306',
  user    : 'anthony',
  password: 'cookies335',
  database: 'ksitedb'
  });



router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Middleton Film' });
  });

  /*

  db.connect((err) => {
    if(err){
      throw err;
    }
    console.log('MySql Connected..');
  });

  /*

  router.post('/addpost', (req, res, next) => {
    let name = req.body.first_name;
    let subject = req.body.last_name;
    let email = req.body.position;
    let message = req.body.number;

    let insertquery = "INSERT INTO `contacts` (ct_name, ct_name, ct_name, ct_name) VALUES ('" + name + "', '" + subject + "', '" + email + "', '" + message +"')";
   // let post = {name: 'name', subject: 'subject', email: 'email', message: 'message'};
   // let sql ='INSERT INTO contacts SET ?';
    let query = db.query(insertquery, () => {
      if(err) {throw err;}
      console.log(result);
      res.render('success', { title: 'Middleton Film | Success!' });

    
    });

});




/*
   function insertrecord(req, res) {
    db.query(insertquery, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        });
    };

 
  });

  
  // Creates DB - Verified
  router.get('/createdb', (req, res) => {
    let sql = 'Create DATABASE ksitedb';
    db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.render('welcomehome', { title: 'Middleton Film' });
    });
  });
  
  //create Table - Verified
  router.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE contacts(id int AUTO_INCREMENT, name VARCHAR(50), subject VARCHAR(50), email VARCHAR(75), message VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.render('welcomehome', { title: 'Middleton Film' });
    });
  });
  
  //insert into db - Verified
  router.get('/addpost', (req, res) => {
    let post = {name: 'this is post number three', subject: 'Test subject', email: 'test@test.com', message: 'TEST MESSAGE'};
    let sql ='INSERT INTO contacts SET ?';
    let query = db.query(sql, post, () => {
      if(err) throw err;
      console.log(result);
      res.send('post created...');
    });
  });
  
  //get from db --change from posts
  router.get('/getposts', (req, res) => {
    let sql ='SELECT * FROM posts';
    let query = db.query(sql, post, () => {
      if(err) throw err;
      console.log(result);
      res.send('post created...');
    });
  });
  
  //select from db --single post
  router.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM posts WHERE id = ${req.params.id}';
    let query = db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('post fetched...');
    });
  });
  
  //update post
  router.get('/getposts', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = 'UPDATE posts SET title = ${' + newTitle +'} WHERE id = ${req.params.id}';
    let query = db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('post updated...');
    });
  });
  
  // deletes contact
  router.get('/deletepost/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = 'DELETE FROM posts WHERE id = ${req.params.id}';
    let query = db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('post updated...');
    });
  });

  */

  module.exports = router;