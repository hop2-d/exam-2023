const Task = require("../model/modelToDo");

exports.firstGet = async (req, res) => {
  try {
    res.send("Todo list backend");
  } catch (error) {
    res.status(404).json(error);
  }
};
exports.testGet = async (req, res) => {
  try {
    res.send("This is test endpoint");
  } catch (error) {
    res.status(404).json(error);
  }
};
exports.getTasksAsList = async (req, res) => {
  try {
    const tasks = await Task.find();
    console.log(Task);
    res.send(tasks);
  } catch (error) {
    res.status(404).json(error);
  }
};
exports.postTasks = async (req, res) => {
  const { text } = req.body;

  try {
    const tasks = await Task.create({
      text: req.body.text,
    });
    res.send(tasks);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.deleteTasks = async (req, res) => {
  const _id = req.headers.id;
  try {
    const tasks = await Task.findByIdAndDelete({ _id });
    res.send(tasks);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.updateText = async (req, res) => {
  const _id = req.body.id;
  const updatedText = req.body;
  console.log(_id, updatedText);
  try {
    const updatedTask = await Task.findByIdAndUpdate({ _id }, updatedText);
    res.send(updatedTask);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.checkedTasks = async (req, res) => {
  const _id = req.body.id;
  // const checkeded = true;
  try {
    const post = await Task.findById(_id);

    post.isDone = !post.isDone;

    await post.save();

    res.send("L code");
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.countCheckedTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    const filtered = tasks.filter((el) => el.isDone==true);
    res.status(200).json(filtered.length);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
