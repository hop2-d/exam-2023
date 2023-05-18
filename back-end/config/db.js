const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.URI;

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(URI);

    console.log("Successfully connected mongodb");
  } catch (error) {
    console.log(error);
    console.log("Failed to connect");
    throw new Error(error);
  }
};

module.exports = connect;
