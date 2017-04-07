var EventEmitter  = require('events').EventEmitter; //chain on to require and pulls constructor function out of event module.
var util = require('util');

var Person = function(name) { 
    this.name = name;  
};


util.inherits(Person, EventEmitter);

module.exports = Person; 

//In Node Js,EVERY JS file is a module.
//Person is now a custom reusable module of code. 
//Module.exports is a JS object, can use dot notation, bracket noteate.