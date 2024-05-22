const http = require("http");
const routeHandler=require("./routes")
const fs = require("fs");

const server = http.createServer(routeHandler );

server.listen(3000);

console.log("Server çalıştı...");
