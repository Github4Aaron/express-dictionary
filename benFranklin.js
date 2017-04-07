var Person = require("./lib/Person"); //This loads Person Constructor; 
//Core modules are required by name; custom modules reuired by path and must be exported.

var ben = new Person("Ben Franklin");  // This is a Person constructor, so we need to require Person constructor
var george = new Person("George Washington"); // Used person object to create two instances of peopel

george.on('speak', function(said) {
    console.log(`${this.name} -> ${said}`);
});

ben.on('speak', function(said) {  //Person ben is using event function of on
    console.log(`${this.name}: ${said}`);
});

ben.emit('speak', "You may delay, but time will not."); 
george.emit('speak', "It is far better to be alone than to be in bad company."); 
//The EventEmitter provides us a way to create custom objects that raise custom events that can be handled asynchronously.

//And because the events are handled asynchronously, it is a very important tool in node.js.