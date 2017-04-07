var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);
var realPerson = {
    name: '', // empty string
    sayings: []  // empty array
};

rl.question("What is the name of a real person?", function(answer) {
    console.log(answer);
});