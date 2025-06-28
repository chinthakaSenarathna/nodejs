const express = require("express");

const router = express.Router();

router.get('/',(req,res,next) => {
    console.log("default middleware");
    res.send("<h2>From the Express</h2>");
})

module.exports = router;