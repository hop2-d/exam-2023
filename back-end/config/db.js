const mongoose = require("mongoose");

const uri = process.env.URI;

const connect = async () => {

    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(uri);
        console.log("\n\x1b[33mSuccessfully connected MongoDB\x1b[0m\n");
    } catch (error) {
        console.log(error);
        // throw new Error(error).message(error.message);  Энийг ашиглах юм бол алдаа бүтээгдэхүүнийг эвдлэх магадлалтай
    }
}
module.exports = { connect }