var fs = require("fs");

// var files = fs.readdirSync('./lib'); //contents are read synchronously with Blocking request

fs.readdir('./lib', function (err, files) {
    if (err) {
        throw err;
    }
    console.log(files);
});
console.log("Reading files");

// This is asynchronouse example
//line 5 is to read dirctory, but line 11 prints first.
//API documenation has an asyn version and a sync version
//Sync commands are great for loading config files