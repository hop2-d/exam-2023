const express = require("express");
const {
  getTasks,
  createTask,
  editTask,
  toggleTask,
  deleteTask,
  getCount,
} = require("../controllers/task.controller");

const router = express.Router();

router
  .get("/list", getTasks)
  .get("/count", getCount)
  .post("/add", createTask)
  .patch("/update/:id", editTask)
  .patch("/checked/:id", toggleTask)
  .delete("/delete/:id", deleteTask);

module.exports.taskRoutes = router;
