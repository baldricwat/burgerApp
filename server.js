// server.js is the node program that serves up the Hamburget Helper app.
//
// Dependencies.
var express = require("express");
var app = express();
// var methodOverride = require("method-override");
//var bodyParser = require("body-parser");


// Sets up the Express App

// Listen either on the port Heroku gives us, or on 8080 if we are running on localhost. 
var PORT = process.env.PORT || 8080;

app.use(express.static('public')); //static content would be served up from the public directory

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(bodyParser.text());
//app.use(express.json({ type: "application/vnd.api+json" }));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
var routes = require('./controllers/burgersController.js');
console.log(routes);
app.use(routes); //use the routes provided in burgers_controller.js





//and let's start the app, listening on the correct PORT (either from the process environment or 8080 if we're on localhost)
app.listen(PORT, function() {
  console.log("Hamburger Helper App listening on PORT " + PORT);
});

