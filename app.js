const http = require("http");

const express = require("express");

const app = express();

// add middleware
app.use((req,res,next) => {
    console.log("In the middleware");
    next(); // allows request to the continue to the next middleware....
})

app.use((req,res,next) => {
    console.log("another middleware");
    next();
})

const server =  http.createServer(app);

server.listen(3000);