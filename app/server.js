const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();
var PORT = 3000;

var port = process.env.PORT || 3000;

var htmlRoutes = require("routing/htmlRouts.js");


app.listen(port, function() {
    console.log("App listening on PORT " + PORT);
  });


