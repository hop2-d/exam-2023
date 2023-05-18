const Task = require("../model/task.model")

const createTasks = async (req, res) => {
    const { text, done } = req.body;
    const task = { text, done }
    const result = await new Task(task).save();
    res.send(result)
};

const getTasks = async (_req, res) => {
    const idk = await Task.find({})
    res.send(idk)
}

const deleteTasks = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id)
    res.send(task)
}

const changeTasks = async (req, res) => {
    const id = req.params.id
    res.send("changed")
}

module.exports = { createTasks, getTasks, deleteTasks, changeTasks }