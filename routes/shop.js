const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

router.get('/',(req,res,next) => {
    console.log("default middleware");
    res.sendFile(path.join(rootDir,"views","shop.html"));
})

module.exports = router;