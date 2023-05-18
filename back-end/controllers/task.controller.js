const Task = require("../models/task.module");

const getList = async (req, res) => {
  try {
    const data = await Task.find({});
    res.send(data);
  } catch (err) {
    throw res.send(err);
  }
};

const addTask = async (req, res) => {
  const data = req.body;

  if (!data.title) {
    return res.status(400).send("fill the title");
  }

  try {
    const task = new Task(data);
    await task.save();
    res.send("new task created");
  } catch (err) {
    throw res.send("lal");
  }
};

const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const task = await Task.findByIdAndUpdate(id, { title: body.title });

    await task.save();

    res.send("updated");
  } catch (err) {
    console.log(err);
  }
};
const check = async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    const task = await Task.findByIdAndUpdate(id, {$set:{isDone: body.isDone}});
     
    await task.save();
    
    res.send("updated");
};

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const del = await Task.deleteOne({ _id: id });
    res.send("deleted");
  } catch (err) {
    throw res.send(err);
  }
};

module.exports = {
  getList,
  addTask,
  updateTask,
  deleteTask,
  check,
};
