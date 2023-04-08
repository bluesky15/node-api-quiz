var express = require("express");
var morgan = require("morgan");

var app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(3001, () => {
  console.log("application is running on the port 3001");
});
