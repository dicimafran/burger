//express dependenceis
var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

//express app
var app = express();

app.use(express.static("public"));

// parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars.
var hBar = require("express-handlebars");

app.engine("handlebars", hBar({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgerController.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
