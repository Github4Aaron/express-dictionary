var fs = require("fs");

var contents = fs.readFileSync("./lib/sayings.md","UTF-8");//if you remove encoding argument it will be binary

console.log(contents);
