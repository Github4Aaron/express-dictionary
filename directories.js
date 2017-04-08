var fs = require("fs");

// fs.renameSync("./assets/logs", "./logs");//1st arg is What you want to move, 2nd arg is where you want to move it. 


// console.log("This was a successful directory move.");

fs.readdirSync("./logs").forEach(function(fileName) { //JS allows chaining so .forEach
    fs.unlinkSync("./logs/" + fileName);//Each file name will be passed through callback function. 
}) // 


fs.rmdir("./logs", function(err) { //async used with callback
   if (err) {
       throw err;
   }
   console.log("logs directory removed");
});

//Cannot remove a directory that is not empty, so you must first remove files from directory.
