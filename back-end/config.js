const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://Aldaraa:aldar20050513@cluster0.hmsxvll.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(MONGODB_URI);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = connect;
