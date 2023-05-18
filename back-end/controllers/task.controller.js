const Task = require("../models/Task")

exports.List = async (req, res) => {
    try{
        const list = await Task.find({})
        res.send(list)
    } catch(err) {
        res.send(err)
    }
}

exports.Add = async (req, res) => {
    try{
        const { text } = req.body
        const task = await Task.create({text})
        res.send(task).status(201)
    }catch(err) {
        res.send(err)
    }
}
exports.Count = async (req, res) => {
    try {
        const count = await Task.find({isDone: true})
        res.send(count)
    } catch(err){
        res.send(err)
    }
}
exports.Delete = async (req, res) => {
    try{
        const {id} = req.body
        const result = await Task.findByIdAndDelete(id)
        res.send(result)
    }catch(err) {
        res.send(err)
    }
}
exports.Edit = async ( req, res) => {
    try{
        const { text, id } = req.body
        const result = await Task.updateOne({ _id: id},
            { $set: { text: text}})
            res.send(result)
    }catch(err){
        res.send(err)
    }
}
exports.Check = async (req, res) => {
    try{
        const { id } = req.body
        const result = await Task.updateOne({ _id: id},
            {$set: { isDone: true} })
            res.send(result)
    }catch(err) {
        res.send(err)
    }
}