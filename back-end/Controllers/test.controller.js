const { Task } = require("../Models/test.model");

exports.getTests = async (_req, res) => {
  try {
    const tests = await Task.find({});
    res.send(tests);
  } catch (err) {
    res.send(err);
  }
};

exports.getTest = async (req, res) => {
  try {
    const test = await Task.findById(req.params.id);
    res.send(test);
  } catch (err) {
    res.send(err);
  }
};
exports.addTest = async (req, res) => {
  try {
    const { text } = req.body;
    console.log("text");
    if (!text) return res.send("No");
    const Lists = await Task.find();
    const task = new Task({ text: text });
    task.save();
    Lists.push(task);
    res.send(Lists);
  } catch (err) {
    res.send(err);
  }
};
exports.countTask = async (req, res) => {
  try {
    const lists = await Task.find({ isDone: true });
    const num = lists.length;
    // console.log(num);
    res.send({ num });
  } catch (err) {}
};
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.headers.id);
    const Lists = await Task.find();
    res.send(Lists);
  } catch (errr) {
    res.send(errr);
  }
};
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.body.id);
    task.text = req.body.text;
    task.save();
    const Lists = await Task.find();
    res.send(Lists);
  } catch (errr) {
    res.send(errr);
  }
};
exports.checkedTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    task.isDone = !task.isDone;
    await task.save();
    const Lists = await Task.find();
    res.send(Lists);
  } catch (errr) {
    res.send(errr);
  }
};
exports.test = async (_req, res) => {
  res.send("This is test endpoint");
};
