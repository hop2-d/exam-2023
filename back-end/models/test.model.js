const { Schema, model } = require("mongoose");

const testSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "test",
  },
});

const Test = model("Test", testSchema);

module.exports = Test;
