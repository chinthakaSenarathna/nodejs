const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use('/add-product',(req,res,next) => {
    console.log("add products middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="productName"><button type="submit">Send</button></form>');
})

app.post('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next) => {
    console.log("default middleware");
    res.send("<h2>From the Express</h2>");
})

app.listen(3000);