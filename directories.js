var fs = require("fs");

// fs.renameSync("./assets/logs", "./logs");//1st arg is What you want to move, 2nd arg is where you want to move it. 


// console.log("This was a successful directory move.");

fs.rmdir("./assets",function(err) {
    if(err) {
        throw err;
    }
    console.log("Assets directory removed");
});

fs.rmdir("./logs", function(err) { //async used with callback
   if (err) {
       throw err;
   }
   console.log("logs directory removed");
});

//Cannot remove a directory that is not empty, so you must first remove files from directory.
