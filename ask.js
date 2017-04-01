var questions = [
    "what is your name?",
    "What is your favorite hobby?",
    "What is your preferred programming language?"
];

var answers = [];

function ask(i) {
    process.stdout.write(`\n\n\n\n ${questions[1]}`);
    process.stdout.write(" > ");
}

process.stdin.on('data', function(data) {
    process.stdout.write('\n' + data.toString().trim() + '\n');
});


ask(0)
// process.stdout.write("Hello ");

// process.stdout.write("World \n\n\n\n");//This two calls make one "hello world" string



//stdout and stdin enable you to communicate with process while it is running
