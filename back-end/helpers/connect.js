const mongoose = require('mongoose')
const MONGODB_URI = "mongodb+srv://tuudug197:ganaa_05223@cluster0.iz53ppl.mongodb.net/"
const connect = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(MONGODB_URI)
        console.log('Successfully connected mongodb')
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = connect
