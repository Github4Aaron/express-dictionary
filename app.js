var express = require("express");
var cors = require("cors"); //cors is a function that returns middleware
var app = express(); //this creates a new instance of an express app
var bodyParser = require("body-parser");

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
app.use(bodyParser.json()); //this was parse the post details
//if data is sent url encoded, we will parse that as well. 
app.use(bodyParser.urlencoded({extended: false}));
//ABOVE:  we have parsed data; parse all variables that are posted to app and placed them on req object


app.use(function(req, res, next) { //post data is on req object.
    console.log(`${req.method} request for ${req.url} - ${JSON.stringify(req.body)}`); //tell us details about the request
    next(); //next function tells app to move to next piece of middleware.
}); 


app.use(express.static("./public"));
app.use(cors()); 

//This setups a GET route/ first arg is location / second is function that handles request
app.get("/dictionary-api", function(req, res) { //express adds functionality to res/req
    res.json(skierTerms);
});
//This setups a POST route, 1st arg is path, 2nd arg is callback.
app.post("/dictionary-api", function(req, res) {
    skierTerms.push(req.body); //This will push new term into array
    res.json(skierTerms); //this will include new terms
});

//Routing variable is available on req.params, and then filter term OUT of dictionary
//Filter takes in callback, and invoked for every term in array.
//callback is PREDICATE (true or false)
//if true, stay in array.
app.delete("/dictionary-api/:term", function(req, res) {
    skierTerms = skierTerms.filter(function(definition) {
        return definition.term.toLowerCase() !== req.params.term.toLowerCase();
    });
    res.json(skierTerms);
});


app.listen(3000); //this means that app will listen on port for incoming requests

console.log("Express app running on port 3000");

//if we export this app instance as a module, this means we can use it in other files.
module.exports = app; 