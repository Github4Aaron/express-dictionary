var https = require("https");  //brings in HTTPS

var fs = require("fs");

var options = { //to make request you need an object literal of options.
    hostname: "en.wikipedia.org",//domain or hostname
    port: 443, //default for https is 443, for http is 80
    path: "/wiki/Abraham_Lincoln",//route or path
    method: "GET"
};

//sending options in this request // once req has started, callback is invoked
var req = https.request(options, function(res) {
    var responseBody = "";
    console.log("response from the server has started");
    console.log(`Server status: ${res.statusCode}`);//template string uses backtick
    console.log("Response Headers: %j", res.headers); //%j placeholder results in call to json.stringify

    res.setEncoding("UTF-8"); //default is binary, so setting it as text.
    res.once("data", function(chunk) { //data event causes callback to fire, data streams are chunks
        console.log(chunk);  // For FIRST one only we will see what chunk looks like.
    });
    res.on("data", function(chunk) { //listener on ANY data event
        console.log(`--chunk-- ${chunk.length}`); //and listener will cause it to log length. 
        responseBody += chunk;
    });
    res.on("end", function() { //listens when response has ended.
        fs.writeFile("george-washington.html", responseBody, function(err) {
            if (err) {
                throw err;
            } console.log("File Downloaded");
        });
    });
});

req.on("error", function(err) { //wired up a listener for request.
    console.log(`problem with request ${err.message}`);
});
req.end();

//SUMMARY:  in HTTPS request, we receive the response object (res)
//we use that stream to gather chunks
//once all data is received, we fs.writeFile to create file. 