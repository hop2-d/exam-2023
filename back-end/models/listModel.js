const { Schema, Types, model } = require("mongoose");

const listSchema = new Schema({
  text: {
    type: String,
  },
  isDone: {
    type: Boolean,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

const List = model("List", listSchema);

module.exports = List;
