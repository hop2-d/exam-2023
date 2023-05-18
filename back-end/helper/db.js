const mongoose = require(`mongoose`);

const url = "mongodb+srv://tushigsaikhna:tushig2005@cluster0.rxdzsmx.mongodb.net/?retryWrites=true&w=majority"

const connect = async () => { 
    try { 
        mongoose.set("strictQuery", false );
        await mongoose.connect(url);
        console.log("Successfully connected mongodb")
    }
    catch (error) { 
        console.log(error)
    }
}

module.exports = connect;