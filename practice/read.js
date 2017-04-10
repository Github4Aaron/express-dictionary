var fs = require("fs");
var path = require("path");

fs.readdir("./lib", function(err, files) {
    files.forEach(function(fileName) {
        var file = path.join(__dirname, 'lib', fileName);
        var stats = fs.statSync(file); //Statistics
        if (stats.isFile() && fileName !== ".DS_Store") { //if its a file, and its NOT .DS_STORE, then read it
            fs.readFile(file, "UTF-8", function(err, contents) {
                console.log(contents);
            });
        }
    });
});


