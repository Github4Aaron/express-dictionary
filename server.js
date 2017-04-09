var http = require("http");
var server = http.createServer(function(req, res) {//any call to server, will cause callback to be invoked
    //content type tells broswer what kind of text we are responding with
    res.writeHead(200, {"content-Type": "text/plain"});//this could be changed to html
    res.end("hello world");
});

server.listen(3000);//tell server what IP and port to listen for request

console.log("Server listening on port 3000");

//we have a running application, a web server listening for requests
//make a get request by navigating to localhost 3000.