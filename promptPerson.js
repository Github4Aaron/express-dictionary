var readline = require('readline'); //RL controls objects for asking and reciving info

var rl = readline.createInterface(process.stdin, process.stdout);
var realPerson = {
    name: '', // empty string
    sayings: []  // empty array
};

rl.question("What is the name of a real person?", function(answer) {
   
   realPerson.name = answer;
   rl.setPrompt(`What would ${realPerson.name} say?`); // function to ask over and over
   rl.prompt();

   rl.on('line', function(saying){
    console.log(saying.trim());
   });
});