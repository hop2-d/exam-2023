const { Router } = require("express");
const {
  getLists,
  createTask,
  doneTasks,
  deleteTask,
  updateText,
  updateDone,
} = require("../controllers/taskController");

exports.taskRouter = Router()
  .get("/list", getLists)
  .post("/add", createTask)
  .get("/count", doneTasks)
  .delete("/delete/:id", deleteTask)
  .patch("/update/:id", updateText)
  .patch("/checked/:id", updateDone);
