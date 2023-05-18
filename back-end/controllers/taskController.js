const { Task } = require("../models/taskModel");

exports.getList = async (req, res) => {
  const result = await Task.find({});
  res.send(result);
};

exports.Count = async (req, res) => {
  try {
    const count = await Task.find({ isDone: true });
    res.send(count);
  } catch (err) {
    res.send(err);
  }
};

exports.Add = async (req, res) => {
  const body = req.body;
  const result = await new Task(body).save();
  res.send(result);
};

exports.Delete = async (req, res) => {
  const id = req.params.id;
  const result = await Task.findByIdAndDelete(id);
  res.send(result);
};

exports.Update = async (req, res) => {
  const taskId = req.params.id;
  const { text } = req.body;
  const result = await Task.findById(taskId);
  result.text = text;
  result.save();
  res.send(result);
};
exports.Checked = async (req, res) => {
  try {
    const result = await Task.findById(req.params.id);
    result.isDone = !result.isDone;
    await result.save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};
