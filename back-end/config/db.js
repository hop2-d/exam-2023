const mongoose = require("mongoose");
require("dotenv").config();

const uri =
  "mongodb+srv://mura:<mura>@cluster0.dhku5zl.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  try {
    // mongoose.set("strictQuery", false);
    await mongoose.connect(uri);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = connect;
