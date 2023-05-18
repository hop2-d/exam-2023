const { Schema, model, mongoose } = require('mongoose')

const listSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    isDone: {
        type: Boolean,
        default: false,
    },
    createdDate: {
        type: Date,
        default: Date.now(),
    }
})

List = model('List', listSchema)
module.exports = List
