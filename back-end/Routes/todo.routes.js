const { deleteModel } = require("mongoose");
const {
  getAllLists,
  getIsDone,
  createTodo,
  deleteTodo,
  updateTodo,
  checkTodo,
} = require("../Controller/todo.controller");
const express = require("express");
const router = express.Router();

router
  .get("/list", getAllLists)
  .get("/count", getIsDone)
  .post("/add", createTodo)
  .patch("/update/:id", updateTodo)
  .patch("/checked/:id", checkTodo)
  .delete("/delete", deleteTodo);

exports.todoRoutes = router;
