var readline = require('readline'); //RL controls objects for asking and reciving info
var fs = require("fs");
var rl = readline.createInterface(process.stdin, process.stdout);
var realPerson = {
    name: '', // empty string
    sayings: []  // empty array
};

rl.question("What is the name of a real person?", function(answer) {
   
   realPerson.name = answer;

   var stream = fs.createWriteStream(realPerson.name + ".md");
   stream.write(`${realPerson.name}\n=========\n\n`);

   //This will create a new markdown file with the person's name 
 

   rl.setPrompt(`What would ${realPerson.name} say?`); // function to ask over and over
   rl.prompt();

   rl.on('line', function(saying){
       


       if (saying.toLowerCase().trim() === 'exit') {
           stream.close();
           rl.close();
       } else {
           realPerson.sayings.push(saying.trim()); 
            stream.write(`* ${saying.trim()}\n`);
            rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave)`); //when we collect teh saying, the prompt is reset.
    
        rl.prompt();
       }
   });
});

rl.on('close', function() {
    console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings)
    process.exit();
})