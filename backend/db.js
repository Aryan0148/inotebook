const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/aryan";

const connectToMongo = () => {
  try {
    mongoose.connect(mongoURI);
    console.log("connected ...! :)");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToMongo;
