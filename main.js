// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello NodeApp By Hitesh!! \n");
});

// listen on localhost:8000
server.listen(5432);
console.log("Server listening on port 5432 :  http://127.0.0.1:5432/");
