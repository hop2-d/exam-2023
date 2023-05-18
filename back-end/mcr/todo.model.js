const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  text: {
    type: String,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model("todo", todoSchema);
