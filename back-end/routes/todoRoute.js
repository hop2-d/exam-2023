const express = require("express");
const router = express.Router();
const {
  create,
  deleteTodo,
  edit,
  getTodos,
  checking,
} = require("../controller/todoController");
router
  .post("/add", create)
  .get("/list", getTodos)
  .delete("/delete/:id", deleteTodo)
  .put("/update/:id", edit)
  .put("/checked", checking);
exports.todoRouter = router;
