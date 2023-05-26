const { Task } = require("../models/taskModel");

exports.getLists = async (req, res) => {
  try {
    const lists = await Task.find({});
    res.send(lists);
  } catch (error) {
    return res.status(404).send({ error });
  }
};

exports.createTask = async (req, res) => {
  try {
    const body = req.body;
    const result = await new Task(body).save();
    res.send(result);
  } catch (error) {
    return res.status(404).send({ error });
  }
};
exports.doneTasks = async (req, res) => {
  try {
    const count = await Task.find({ isDone: true });
    res.status(200).json(count.length);
  } catch (error) {
    return res.status(404).send({ error });
  }
};
exports.deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Task.deleteOne({ _id: id });
    res.send(result);
  } catch (error) {
    return res.status(404).send({ error });
  }
};
exports.updateText = async (req, res) => {
  try {
    const id = req.params.id;
    if (!req.body.text) return res.send("Text is required");
    const result = await Task.findByIdAndUpdate(id, {text: req.body.text});
    res.send(result);
  }  catch (error) {
    console.log(error)
    return res.status(404).send({ error });
  }
};
exports.updateDone = async (req, res) => {
  const id = req.params.id;
  try {
    const task = await Task.findById(id);
    console.log(task.isDone);
    task.isDone = !task.isDone;
    console.log(task);
    const result = await Task.findByIdAndUpdate(id, task);
    res.send(result);
  }  catch (error) {
    return res.status(404).send({ error });
  }
};
