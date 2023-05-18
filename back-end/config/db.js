const mongoose = require("mongoose");

const uri =
  process.env.URI ||
  "mongodb+srv://kongorzul8888:exam-2023@exam-2023.uwznjg1.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  console.log(uri);
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri);
    console.log("Succesfully connected to MongoDB");
  } catch (error) {
    console.log(error);
    // throw new Error(error).message(error.message);
    console.error(error);
  }
};
module.exports = connectDB;
