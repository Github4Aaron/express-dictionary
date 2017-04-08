
var fs = require("fs");

if (fs.existsSync("libTest")) {
    console.log("The directory is already there");
} else {

fs.mkdir("libTest", function(err) {
    if (err) {
        console.log(err)
    } else{
        console.log("Directory created");
    }
}); // If you run this twice, you will receive error. 
}