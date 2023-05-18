const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
    },
    Date: {
        type: Date,
        createdAt: Date.now()
    }
})

const Task = mongoose.model("Task", TaskSchema)
module.exports = Task
