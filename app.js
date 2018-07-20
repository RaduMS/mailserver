var express = require('express');
var mailController = require('./controllers/mailController');

var app = express();

// //set up tamplate express
// app.set('view engine', 'ejs');

// fire controllers
mailController(app);

//static files
// app.use('/asstes', express.static('./public'))
app.use(express.static('./public'))

//lissen to port
app.listen(3000)
console.log('You are listening to port 3000');