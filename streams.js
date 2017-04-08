var fs = require("fs"); //fs used to read chatlog.

var stream = fs.createReadStream("./chat.log", "UTF-8"); //Using Stream we don't have to wait to for entire file to load

var data = ""; //data contents will go in this variable.

stream.once("data", function() { //callback will fire only once
    console.log("\n\n\n");
    console.log("Started Reading File");
    console.log("\n\n\n");
});
//listening for data events, just a small chunk
stream.on("data", function(chunk) {
//display length of chunks on terminal
    process.stdout.write(`chunk: ${chunk.length} |`); // pipe separates more chunks.
    data += chunk;
});

stream.on("end", function() { //listener is wired up for an end event.
    console.log("\n\n\n");
    console.log(`Finished Reading File ${data.length}`);
    console.log("\n\n\n");
})
//Stream enable us to asyncrhonously handle continuous data flows. ask.js file uses this. 
//process.stdout/stdin use the stream interface.

//File reading process happened in various stages. 

//we did not have to wait to buffer the data. 
//Readable file stream