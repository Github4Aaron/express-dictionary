var express = require("express");
var cors = require("cors"); //cors is a function that returns middleware
var app = express(); //this creates a new instance of an express app

var skierTerms = [ //array of objects that have term / defined in it.
    {
        term: "Rip",
        defined: "To move at a high rate of speed."
    },
    {
        term: "Huck",
        defined: "To throw your body off of something, usually a natural feature like a cliff."
    },
    {
        term: "Chowder",
        defined: "Powder after it has been sufficiently skied."
    }
];


app.use(function(req, res, next) {
    console.log(`${req.method} request for ${req.url}`); //tell us details about the request
    next(); //next function tells app to move to next piece of middleware.
}); 


app.use(express.static("./public"));
app.use(cors()); 

//This setups a GET route/ first arg is location / second is function that handles request
app.get("/dictionary-api", function(req, res) { //express adds functionality to res/req
    res.json(skierTerms);
});


app.listen(3000); //this means that app will listen on port for incoming requests

console.log("Express app running on port 3000");

//if we export this app instance as a module, this means we can use it in other files.
module.exports = app; 