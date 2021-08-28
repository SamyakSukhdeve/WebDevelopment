const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

//Adding
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The Reslut of the calcualtion is " + result);
});

//BMI Calculate
app.get("/bmi", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/", function(req, res){
  var height = parseFloat(req.body.n1);
  var weight = parseFloat(req.body.n2);
  var bmi = weight / (height*height);
  res.send("Your Bmi is " + bmi);
})



app.listen(3000, function() {
  console.log("Server is running at port 3000.");
});
