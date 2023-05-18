const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const todo = new Schema({
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  checked: {
    type: Number,
    
  },
});
const Todo = model("todo", todo);
module.exports.Todo = Todo;
