const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("<h1>Samyak Sukhdeve</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at samyaksukhadeve12@gmail.com");
});

app.get("/about", function(req, res){
  res.send("My name is samyaksukhdeve and i am Software Developer.");
});

app.get("/hobbys", function(req, res){
  res.send("playing");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
