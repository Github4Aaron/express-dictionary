var fs = require("fs"); //fs used to read chatlog.

fs.readFile("./chat.log", "UTF-8", function(err, chatlog) { //reading chatlog file, as UTF 8, and tehn callback invoked once we have file..
    console.log(`File read ${chatlog.length}`);
});

console.log("Reading File");

//Stream enable us to asyncrhonously handle continuous data flows. ask.js file uses this. 
//process.stdout/stdin use the stream interface. 