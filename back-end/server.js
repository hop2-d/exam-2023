const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const { text } = req.body;
  const newTask = { text, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;
  tasks[id] = { ...tasks[id], text, completed };
  res.json(tasks[id]);
});

app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const deletedTask = tasks.splice(id, 1);
  res.json(deletedTask);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
