const express = require("express");

const app = express();

// add middleware
app.use((req,res,next) => {
    console.log("In the middleware");
    next(); // allows request to the continue to the next middleware....
})

app.use((req,res,next) => {
    console.log("another middleware");
    res.send('<h2>From the ExpressJs</h2>');
})

app.listen(3000);