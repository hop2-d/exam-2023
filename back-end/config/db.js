const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URI = "mongodb+srv://Enkhtuvshin:azjargal1001@cluster0.xdrfvky.mongodb.net/";

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGODB_URI);
    console.log("Successfully connected to DataBase");
  } catch (err) {
      throw new Error(err);
  }
};

module.exports = connect;
