const { Todo } = require("../models/todolist");
exports.create = async (req, res) => {
  try {
    const { title } = req.body;
    const todo = await new Todo({
      title,
    }).save();
    res.send(todo);
  } catch (err) {
    res.send(err);
  }
};
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.send(todos);
  } catch (err) {
    res.send(err);
  }
};
exports.checking = async (req, res) => {
  try {
    const { checked } = req.body;
    const update = await Todo.findByIdAndUpdate(checked, {
      checked: checked,
    });
    await update.save();
    res.send(update);
  } catch (err) {
    res.send(err);
  }
};
exports.edit = async (req, res) => {
  try {
    const id = req.params.id;

    const title = req.body.title;
    console.log(id, title);
    const update = await Todo.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        title: title,
      }
    );
    await update.save();
    res.send(update);
  } catch (err) {
    res.send(err);
  }
};
exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Todo.findByIdAndDelete(id);
    res.send(200, "succesfully deleted");
  } catch (err) {
    res.send(err);
  }
};
