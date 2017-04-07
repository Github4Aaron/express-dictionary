var EventEmitter  = require('events').EventEmitter; //chain on to require and pulls constructor function out of event module.
var util = require('util');

var Person = function(name) { //JS objects are functions
    this.name = name;  //this object has a name property
};

//util.inherit allows inheritance
util.inherits(Person, EventEmitter);//This one line means that the Person object inherits the EventEmitter
//Person inherits functionality of event emitter

var ben = new Person("Ben Franklin");

ben.on('speak', function(said) {  //Person ben is using event function of on
    console.log(`${this.name}: ${said}`);
});

ben.emit('speak', "You may delay, but time will not."); 

//The EventEmitter provides us a way to create custom objects that raise custom events that can be handled asynchronously.

//And because the events are handled asynchronously, it is a very important tool in node.js.