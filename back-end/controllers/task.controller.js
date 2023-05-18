const { Task } = require("../models/task.model");

exports.getTasks = async (req, res) => {
  try {
    const result = await Task.find({});
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

exports.getCount = async (req, res) => {
  try {
    const count = await Task.find({ isDone: true });
    res.send(count);
  } catch (err) {
    res.send("err");
  }
};

exports.createTask = async (req, res) => {
  try {
    const { text } = req.body;

    const result = await new Task({
      text,
    }).save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

exports.editTask = async (req, res) => {
  try {
    const { text } = req.body;
    const result = await Task.findById(req.params.id);
    console.log(result);
    result.text = text;
    await result.save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

exports.toggleTask = async (req, res) => {
  try {
    const result = await Task.findById(req.params.id);
    result.isDone = !result.isDone;
    await result.save();
    res.send(result);
  } catch (err) {
    res.send("err");
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const result = await Task.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};
