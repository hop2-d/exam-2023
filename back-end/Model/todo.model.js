const { Schema, Types, model } = require("mongoose");

const TodoSchema = new Schema({
  text: { type: String, required: true },
  isDone: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now() },
});

const Todo = model("Todo", TodoSchema);

exports.Todo = Todo;
