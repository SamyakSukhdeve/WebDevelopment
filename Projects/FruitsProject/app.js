//mongoDB username = samyakDB
//mongoDB password = FIcj0fBVaW0jfRLQ
//mongoDB URI = mongodb+srv://samyakDB:FIcj0fBVaW0jfRLQ@cluster0.r47q8.mongodb.net/fruitsDB?retryWrites=true&w=majority

const {
  MongoClient
} = require("mongodb");
const assert = require("assert");
const mongoose = require("mongoose");

const uri = "mongodb+srv://samyakDB:FIcj0fBVaW0jfRLQ@cluster0.r47q8.mongodb.net/fruitsDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true}, { useUnifiedTopology: true });
const dbName = "fruitsDB";


// connecting nodeJS with MongoosDB
mongoose.connect(uri);
// Mongoose Schema
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const apple = new Fruit({
//   name: "Apple",
//   rating: 8,
//   review: "Greate"
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   rating: 6,
//   review: "Good"
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   rating: 7,
//   review: "Very Good"
// });

// Insert Operation
// Fruit.insertMany([apple, orange, banana], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully saved all the fruits to DB");
//   }
// });

//Read Operation
Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  } else{
    mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
})
