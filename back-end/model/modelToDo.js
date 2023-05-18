const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  text: { type: String },
  isDone: { type: Boolean,default:false },
  createdDate: { type: Date, default: new Date() },
});

const Task = mongoose.model("todos", TaskSchema);

module.exports = Task;
