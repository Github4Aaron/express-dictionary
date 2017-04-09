/* jshint esnext: true */ //Run jshint but except ES6 syntax
var http = require("http");

http.createServer(function(req, res) {

   res.writeHead(200, {"Content-Type": "text/html"});
   res.end(`<!DOCTYPE html>
     <html>
       <head>
         <title>Web Server</title>
       </head>
       <body>
         <h1>Hello World Aaron</h1>
     </html> 
   `);

}).listen(3000);

console.log("There is now a  server running at http://localhost:3000");
