const { Schema, model } = require('mongoose')

const TaskSchema = new Schema({
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
        default: Date.now()
    }
})
Task = model('Task', TaskSchema)
module.exports = Task
