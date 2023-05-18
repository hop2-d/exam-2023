const { Schema, model, SchemaType, Types } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

userSchema.virtual("posts", {
  ref: "Todo",
  localField: "_id",
  foreignField: "creatorId",
});

userSchema.set("toObject", { virtuals: true });
userSchema.set("toJSON", { virtuals: true });

const User = model("TodoListUser", userSchema);

module.exports = User;
