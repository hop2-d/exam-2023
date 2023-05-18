const { Schema, model } = require("mongoose");

const testSchema = new Schema({
  text: {
    required: true,
    type: String,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

const Task = model("task", testSchema);

module.exports.Task = Task;