const { Schema, model } = require("mongoose")

const listSchema = new Schema({
    text: {
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

const List = model("lists", listSchema);

module.exports.List = List;