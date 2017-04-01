var questions = [
    "what is your name?",
    "What is your favorite hobby?",
    "What is your preferred programming language?"
];

var answers = [];

function ask(i) {
    process.stdout.write(`\n\n\n\n ${questions[i]}`); //Note: "i" was a 1, causing array NOT to iterate through.
    process.stdout.write(" > ");
}

// BELOW echos the data back you you
// process.stdin.on('data', function(data) { // function here is an asynchronous callback function  
//     process.stdout.write('\n' + data.toString().trim() + '\n');
// });

// process.stdin is event listener
process.stdin.on('data', function(data) { // function here is an asynchronous callback function  
    answers.push(data.toString().trim()); //this pushes answer back into array.

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', function() {  //function here is a callback
    process.stdout.write("\n\n\n\n");
    process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`);
    process.stdout.write("\n\n\n\n");
})

ask(0);
// process.stdout.write("Hello ");

// process.stdout.write("World \n\n\n\n");//This two calls make one "hello world" string



//stdout and stdin enable you to communicate with process while it is running
