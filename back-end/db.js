const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.MONGO_URI;

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(URI);
    console.log("Successfully connected");
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = connect;