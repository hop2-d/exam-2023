const { Schema, Types, model } = require('mongoose');

const todoSchema = new Schema({
    text:{
        type:String,
        // required:true,
    },

    isDone:{
        type:Boolean,
        default:false,
    },

    createdDate:{
        type:Date,
        default:new Date(),
    }
});

exports.Todo = model('todo', todoSchema);