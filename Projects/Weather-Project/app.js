const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){

  const query = req.body.cityName;
  const apiKey = "6ab7faa15827518a10f575e7d6f68bce"
  const unit = "metric"
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
  https.get(url, function(response){
   console.log(response.statusCode);

   response.on("data", function(data){
     const weatherData = JSON.parse(data);
     const temp = weatherData.main.temp;
     const discription = weatherData.weather[0].description;
     const icon = weatherData.weather[0].icon;
     const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

     res.write("<p> The Weather is Currently " + discription + "</p>");
     res.write("<h1>The Temperature in " +  query + " is " + temp + "degree Celcius.</h1>");
     res.write("<img src = " + imageUrl + ">");

     res.send();
   })
  })

})





app.listen(3000, function(){
  console.log("Server is running on port 3000.");
})
