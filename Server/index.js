"use strict"
const express = require("express");
const config = require("./config");
const app = express();

app.use(function(req,res){
  res.send("f off");
  console.log("wrong Wat");
});

app.listen(config.PORT);

console.log("Server started at "+config.PORT);
