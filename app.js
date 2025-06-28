const express = require("express");

const app = express();

// add middleware
app.use('/',(req,res,next) => {
    console.log("always run");
    next(); // allows request to the continue to the next middleware....
})

app.use('/add-product',(req,res,next) => {
    console.log("add products middleware");
    res.send('<h2>Add the product page</h2>');
})

app.use('/',(req,res,next) => {
    console.log("default middleware");
    res.send("<h2>From the Express</h2>");
})

app.listen(3000);