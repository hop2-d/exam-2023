const { Todo } = require("../Model/todo.model");

exports.getAllLists = async (req, res) => {
  try {
    const lists = await Todo.find({});
    res.send(lists);
  } catch (err) {
    res.status(401).send(err);
  }
};

exports.getIsDone = async (req, res) => {
  try {
    const lists = await Todo.find({});
    // for (let i = 0; i < lists.length; i++) {
    //   if (lists[i].isDone) {
    //     count++;
    //   }
    // }
    const result = lists.filter((word) => word.isDone == true);
    console.log(result.length);
    res.json({ count: result.length });
  } catch (err) {
    res.send(err);
  }
};

exports.createTodo = async (req, res) => {
  console.log(req.body);
  try {
    if (!req.body.text) {
      return res.status(401).send("Please enter a todo name");
    }
    const todo = await new Todo({ text: req.body.text }).save();
    res.send(todo);
  } catch (err) {
    res.status(401).send(err);
  }
};

exports.deleteTodo = async (req, res) => {
  const id = req.headers.id;
  console.log(id);
  try {
    if (!id) {
      return res.status(401).send("No id provided");
    }

    const todo = await Todo.findByIdAndDelete(id);
    res.send("Successfully deleted");
  } catch (err) {
    res.status(401).send(err);
  }
};

exports.updateTodo = async (req, res) => {
  const id = req.params.id;
  try {
    if (!id) return res.send("No id provided");
    if (!req.body.text) return res.send("Please enter a text");
    console.log(req.body.text, "bodyy");
    const todo = await Todo.findOne({ _id: id });

    todo.text = req.body.text;

    const result = await Todo.findByIdAndUpdate(id, todo);
    res.send(result);
  } catch (err) {
    res.status(401).send(err);
  }
};

exports.checkTodo = async (req, res) => {
  const id = req.params.id;
  // console.log(req.body);
  try {
    if (!id) return res.send("No id provided");
    const todo = await Todo.findById(id);
    console.log(todo.isDone);

    todo.isDone = !todo.isDone;

    console.log(todo);
    const result = await Todo.findByIdAndUpdate(id, todo);
    res.send(result);
  } catch (err) {
    res.status(401).send(err);
  }
};
