const { Schema, model, default: mongoose } = require("mongoose");

const taskSchema = new Schema({
    text:String,
    isDone: {
      type: Boolean,
      default: false,
  },
    createdAt: { default: Date.now(), type: Date },
  },
);
  
  const Task = model("Task", taskSchema);
  
  exports.Task = Task;