var fs = require("fs");

fs.renameSync("./assets/logs", "./logs");//1st arg is What you want to move, 2nd arg is where you want to move it. 


console.log("This was a successful directory move.");