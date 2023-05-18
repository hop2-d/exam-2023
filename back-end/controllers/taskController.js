const { Task } = require('../models/taskModel');

exports.getList = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.send(tasks);
    } catch (error) {
        res.send(error);
    }
}

exports.getCount = async (req, res) => {
    try {
        const tasks = await Task.find({});
        var count = 0;
        tasks.forEach(item => {
            if (item.isDone) {
                count++;
            }
        })
        res.send(`Completed tasks count: ${count}`);
    } catch (error) {
        res.send(error);
    }
}

exports.addTask = async (req, res) => {
    const { text } = req.body || {}
    try {
        const task = new Task({text})
        await task.save();
        res.send(task);
    } catch (error) {
        res.send(error);
    }
}

exports.deleteTask = async (req, res) => {
    const { id } = req.params
    try {
        const task = await Task.findByIdAndDelete(id);
        res.send(task);
    } catch (error) {
        res.send(error);
    }
}

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    try {
        const t = await Task.findById(id)
        t.text = text
        const task = await Task.findByIdAndUpdate(id, t);
        task.save();
        res.send(task);
    } catch (error) {
        res.send(error);
    }
}

exports.changeCheck = async (req, res) => {
    const { id } = req.params;
    try {
        const t = await Task.findById(id)
        t.isDone = !t.isDone;
        const task = await Task.findByIdAndUpdate(id, t);
        task.save();
        res.send(task);
    } catch (error) {
        res.send(error);
    }
}