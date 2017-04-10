var express = require("express");

var app = express(); //this creates a new instance of an express app

//This custom middleware function is callback. 
//whenver a requst, app will use this custom first and THEN express stattic
//3 arguments, req, res, next. 
//This adds functionality to the pipeline.

app.use(function(req, res, next) {
    console.log(`${req.method} request for ${req.url}`); //tell us details about the request
    next(); //next function tells app to move to next piece of middleware.
}); //One request for home page made 6 total GET requests

//Middleware is a customized plugins to use with express to add functionality.
//Static file server and takes in name of directory where we want to server files.
app.use(express.static("./public")); //this will get served
//This will load css files

app.listen(3000); //this means that app will listen on port for incoming requests

console.log("Express app running on port 3000");

//if we export this app instance as a module, this means we can use it in other files.
module.exports = app; 