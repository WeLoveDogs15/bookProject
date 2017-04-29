var express = require("express");
var bookCtrl = require("./controllers/book.ctrl");

var router = express.Router();

router.use("/books", bookCtrl);

module.exports = router;