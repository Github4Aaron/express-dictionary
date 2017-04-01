console.log(process.argv); //provides info about current process instance
//argv is argument variables used to store instance

//this command adds info to process array
    //node app.js --name "George" --greeting "Good day sir"

function grab(flag) {  //argument is flag
     var index = process.argv.indexOf(flag);
     return (index === -1) ? null: process.argv[index+1];
}

var greeting = grab('--greeting');
var user = grab('--user');

if (!user || !greeting) {
    console.log("There is no user or greeting");
} else {
    console.log(`Welcome ${user}, ${greeting}`);
}