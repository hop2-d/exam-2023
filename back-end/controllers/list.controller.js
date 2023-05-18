const List = require('../models/list.model')
require('dotenv').config()


exports.list = async (req, res) => {
    try {
        const list = await List.find({})
        res.send(list)
    } catch (error) {
        res.send(error)
    }
}
exports.count = async (req, res) => {
    try {
        const Done = await List.find({isDone: true})
        res.send(Done)
    } catch (error) {
        res.send(error)
    }
}
exports.add = async (req, res) => {
    try {
    const { text } = req.body
    const found = await List.findOne({ text })
        if (found) {
            res.send('you already made this task')
            return
        }
    const list = await List.create({
        text,
    })
    res.send(list)
    } catch (error) {
        res.send(error)
    }
}
exports.deelete = async (req, res) => {
    try {
    const id = req.headers.authorization
    console.log(id)
    const deleteTask = await List.findByIdAndDelete(id)
    res.send(deleteTask)
    } catch (error) {
        res.send(error)
    }
}
exports.update = async (req, res) => {
    try {
    const { id , newText } = req.body
    const updatedText = await List.findByIdAndUpdate(id, { text: newText } )
    res.send(updatedText)
    } catch (error) {
        res.send(error)
    }
}
exports.checked = async (req, res) => {
    try {
    const { id } = req.body
    const check = true
    const updateDone = await List.findByIdAndUpdate(id, { isDone: check } )
    res.send(updateDone)
    } catch (error) {
        res.send(error)
    }
}
exports.test = async (req, res) => {
    try{
        res.send("This is test endpoint")
    } catch (error) {
        res.send(error)
    }
}