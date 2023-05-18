const mongoose = require("mongoose");

const MONGODB_URI = "mongodb+srv://ztuushii:v074B61DCRt5po8g@cluster0.pyg03nr.mongodb.net/"

const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Successfully connected to MongoDB")
    } catch (error) {
        throw new Error("ERRRORORORO", error.message);
    }
};
module.exports = connect;