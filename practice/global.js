var path = require("path"); //this loads the path module

console.log("Hello, world");//console is a global object part of global namespace.
global.console.log("Hello, world");  // this will work the same if global namespace is added.



// Global namespace is assumed, so no need to add it. 
//Node Variables are NOT added to global object like they are in browswer
// Every Node.js file is its own module, and any variable is scoped only to that module. 


var hello = "Hello world from Node.js";

var justNode = hello.slice(17);

console.log(`Rock on World from ${justNode}`); // TEMPLATE STRING

console.log(`Rock on worldfrom ${path.basename(__filename)}`);

console.log(__dirname);
console.log(__filename);

