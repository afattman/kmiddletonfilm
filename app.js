var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var contactrouter = require('./routes/contact');
var dashboardrouter = require('./routes/dashboard');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
//Initilaizes the app as a whole
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); //parses form data from client
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', contactrouter);
app.use('/', dashboardrouter);

//app.post('/add', addContact);

app.post('/http://localhost:8090/contacts', function(req, res) {
 var contactAry = { id: 2,
                  name: 'Fattman',
                  email: 'Dudes101@Gmail.com',
                  message: 'Yo kevin, biggest fan ever'}
});

app.get('/', function(req, res){
  res.send('Hey');
});

app.post('/send', (req,res)=> {
  const output = `
  <p> You have been Contacted by ${req.body.fullname}</P>
  <p> Here are the details </P>
  <ul>
    <li>Name: ${req.body.fullname}</li>
    <li>Subject: ${req.body.subject}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone: ${req.body.phone}</li>
    <li>Message: ${req.body.message}</li>
  </ul>
 `;

 const responseEmail = `
 <h1>  ${req.body.fullname}, </h1>
 <h3>Thank you for contacting me. I will reach out to you concerning your form as soon as possible!</h3>
 <br>
 <br>
 <h3>Best,<h3>
 <h2> -Kevin <h2>
`
//<img src="/images/logosmalltransparent.png" alt="logo" />


// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'rfattmanWebsite@gmail.com', // generated ethereal user
    pass: 'Victory2020', // generated ethereal password
  },
  tls:{
    rejectUnauthorized:false
  }
});


let mailConfig = {}

// send mail with defined transport object
let info = transporter.sendMail({ 
  from: '"Website contact Form" <kmiddletonfilm@gmail.com>', // sender address
  to: "kmiddletonfilm@gmail.com ", // list of receivers
  subject: `${req.body.fullname} - Website Contact Form Submission Completed`, // Subject line ✔
  html: output
});

let outging = transporter.sendMail({
  from: '"Successful Website Submission " <childrensnestacademy@gmail.com>', // sender address
  to: `${req.body.email}`, // list of receivers
  subject: `Kevin Middleton Website Contact Form Submission `, // Subject line ✔
  html: responseEmail
 // attachments: [{
 //   filename: 'logosmalltransparent.png.png',  
 //   path: 'public/images'
 // }]
});

console.log("Message sent: %s", info.messageId);

console.log("Message sent: %s", outging.messageId);
// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// Preview only available when sending through an Ethereal account
console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

res.render('index', { title: `Children's Nest` });

});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  
});


module.exports = app;
