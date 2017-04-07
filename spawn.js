var spawn = require('child_process').spawn; //plucks spawn function

var cp = spawn("node", ["alwaysTalking"]); //command to run, 2nd argument, all things after command


cp.stdout.on("data", function(data) {
    console.log(`STDOUT: ${data.toString()}`);
});

cp.on("close", function() {//close event, then callback function fires
    console.log("Child Process has ended");
    process.exit();
});

setTimeout(function() {
    cp.stdin.write("stop");
}, 4000);