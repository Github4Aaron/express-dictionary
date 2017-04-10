var exec = require("child_process").exec;//Child Process contains execute function, so we can chain it to end to pluck it out. 

// exec("open http://www.linkedin.com");
// exec("open -a Terminal ."); git --version.
exec("ls", function(err, stdout) { //if errors, passes as first argument
    if (err) {
        throw err;
    }
    console.log("listing finished");
    console.log(stdout);  // second argument from above is the output
});










//Child Process mdoule allows us to execute external processes within environment.
//Execute command is enables us to use external commands in our environment.