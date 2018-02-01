// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



serverHTML = app.get("/survey", function (req, res){
    res.sendFile(path.join(__dirname, "./public/survey.html"));
})


app.listen(port, function() {
    console.log("App listening on PORT " + PORT);
  });

