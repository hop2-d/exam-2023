const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://Dirty_ToiletPaper:94031299Ub@cluster0.3joq91s.mongodb.net/?retryWrites=true&w=majority";
const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGODB_URL);
    console.log(`successfully connected to MongoDB`);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.connect = connect;