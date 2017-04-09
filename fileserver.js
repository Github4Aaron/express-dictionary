var http = require("http");
var fs = require("fs");
var path = require("path");

http.createServer(function(req, res) {// callback invoked with every web request
    console.log(`${req.method} request for ${req.url}`);
    if (req.url === "/") {
        fs.readFile("./public/index.html", "UTF-8", function(err, html) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });

    } else if(req.url.match(/.css$/)) {//reg expression goes between two slashes
        var cssPath = path.join(__dirname, 'public', req.url); //creating a path to the file
        var fileStream = fs.createReadStream(cssPath, "UTF-8");

        res.writeHead(200, {"Content-Type": "text/css"});//setting up response header, content type is css
        fileStream.pipe(res);//once we have a read stream, we can pipe it to response steam
    } else if(req.url.match(/.jpg$/)) {
        var imgPath = path.join(__dirname, 'public', req.url);
        var imgSteam = fs.createReadStream(imgPath);
        res.writeHead(200, {"Content-Type": "image/jpeg"});
        imgSteam.pipe(res);//pipe readstream to write stream(resp).
    
} else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("404 File Not Found");
    }
}).listen(3000); // we can chain listen command

console.log("File server running on port 3000");
