var fs = require("fs");

try { // This is running synchronously
fs.unlinkSync("./lib/config.json");
} catch (err) {
    console.log(err);
}

fs.unlink("notes.md", function(err) {//Because done async, errors are able to be passed in callback. 
    if (err) {
        console.log(err);
    } else {
        console.log("Notes.md removed");
    }

});