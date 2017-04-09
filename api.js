var http = require("http");

var data = require("./data/inventory");//requiring JSON data in inventory file

http.createServer(function(req, res) {//create server and callback for every incoming request
    
  if (req.url === '/') { //HOme page renders ALL data
    res.writeHead(200, {"Content-Type": "text/json"});//identifies that we are responding with JSON.
    res.end(JSON.stringify(data));//JSON stringify is JS method
  } else if (req.url === "/instock") { // instock page renders instock items
    listInStock(res); 
  } else if (req.url === "/onorder") {//onorder page renders on order items
      listOnBackOrder(res);
  } else {
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.end("Whoops, data not found");
  }
}).listen(3000);//listen is chained on.

console.log("server listening on port 3000");

function listInStock(res) {
    var inStock = data.filter(function(item) {  //data is array, filter is function
        return item.avail === "In stock";
    });
     res.end(JSON.stringify(inStock));
}
 function listOnBackOrder(res) {
    var onOrder = data.filter(function(item) {  //data is array, filter is function
        return item.avail === "On back order";
    }); 
    res.end(JSON.stringify(onOrder));
 }


 //APIs are used to serve data to client applications(mobile, spa)
 //any client who makes HTTP request can comm with API.