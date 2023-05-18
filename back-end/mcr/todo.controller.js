const Todo = require("./todo.model");

exports.base = (req, res) => {
  res.send("Todo list backend");
};
exports.base2 = (req, res) => {
  res.send("This is test endpoint");
};
exports.add = async (req, res) => {
  const body = req.body;
  const result = await Todo.create(body);
  res.send(result);
};

exports.list = async (req, res) => {
  const body = await Todo.find({});
  res.send(body);
};

exports.count = async (req, res) => {
  const body = await Todo.find({ isDone: true });
  res.send(body.length.toString());
};

exports.deletetodo = async (req, res) => {
  id = req.headers.id;
  const result = await Todo.deleteOne({ _id: id });
  res.send(result);
};

exports.patchtodo = async (req, res) => {
  id = req.headers.id;
  const result = await Todo.findByIdAndUpdate(id, {
    text: req.body.text,
  });
  res.send(result);
};

exports.patchtododone = async (req, res) => {
  id = req.headers.id;
  isDone = req.body.isDone;
  const result = await Todo.findByIdAndUpdate(id, {
    isDone: !isDone,
  });
  res.send(result);
};
