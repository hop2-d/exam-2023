const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  text: {
    required: true,
    type: String,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Task = model("task", taskSchema);

module.exports.Task = Task;
