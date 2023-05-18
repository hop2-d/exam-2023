const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
    text: String,
    isDone: {
        type: Boolean,
        default: false,
    },
    createdDate: {
        type: Date,
        default: Date.now(),
    }
})

const Task = model('Task', taskSchema);
exports.Task = Task;