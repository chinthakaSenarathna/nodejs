const http = require("http");

const route = require("./route");

const server =  http.createServer(route.requestListener);

server.listen(3000);