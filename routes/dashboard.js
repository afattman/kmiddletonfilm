var express = require('express');
var router = express.Router();
//var pg = require('pg');

const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'kevinmmiddleton.com',
  database: 'kfilmdb',
  password: 'Poopmike',
  port: 5432,
});

var localconnect = "postgres://postgres:cookies335@localhost/KevinSite";

var serverConnect = "postgres://postgres:Poopmike@kevinmmiddleton.com/kfilmdb";
/*
var client = new pg.Client(serverConnect, function(err, client, done) {
    if(err) 
      return console.error('Din work', err);
    }
});
*/

var email;

router.get('/dashboard', function(req, res, next) {
    
   // client.connect();
    //client.query('SELECT * FROM contacts', function(err, result)

    pool.query('SELECT NOW()', (err, result) => {

        if (err) {
            return console.error('Error with the query...man', err);
        }
        //var name = result.toString();
        console.log('Rendering Contacts Data');

        for(var i=0; i <= result.rowCount; i++){
            console.log(result.fields[i].name);
            console.log(result.fields[i].format);
            console.log(result.fields[i].columnID);
            console.log(result.fields[i].dataTypeID);
            console.log(result.fields[i].tableID);
            console.log(result.fields[i].dataTypeModifier);
          //  console.log(result.rows[i].name);
          //  console.log(result.oid.toString);
        }
 
        res.render('dashboard', {
            id: result.rows[1].id,
            name: result.rows[1].name,
            email: result.rows[1].email,
            message: result.rows[1].message
        
        });
        pool.end()
       // name = result.name;
      //  email = result.email;
       // client.end();
    });
});





const client = new Client({
    user: 'postgres',
    host: 'kevinmmiddleton.com',
    database: 'kfilmdb',
    password: 'Poopmike',
    port: 5432,
});

/*
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})
*/

module.exports = router;