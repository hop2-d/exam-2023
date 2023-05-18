const express = require("express");
const Router = express.Router();
const {
  firstGet,
  testGet,
  getTasksAsList,
  postTasks,
  deleteTasks,
  updateText,
  checkedTasks,
  countCheckedTasks
} = require("../controller/todo.controller.js");

Router.get("/", firstGet)
  .get("/test", testGet)
  .get("/list", getTasksAsList)
  .get("/count", countCheckedTasks)
  .post("/add", postTasks)
  .delete("/delete", deleteTasks)
  .patch("/update", updateText)
  .patch("/checked", checkedTasks)

module.exports = Router;
