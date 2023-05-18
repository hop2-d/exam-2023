const { Schema, model, Types } = require("mongoose");

const Task = new Schema({
  text: String,
  isDone: { type: Boolean, default: false },
  createdDate: { type: Date, default: Date.now() },
});
const TaskModel = model("Task", Task);
module.exports = { TaskModel };
