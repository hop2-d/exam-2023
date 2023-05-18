const {
  getTests,
  test,
  getTest,
  addTest,
  deleteTask,
  countTask,
  updateTask,
  checkedTask,
} = require("../Controllers/test.controller");
const express = require("express");
const router = express.Router();

router
  .get("/list", getTests)
  .get("/test", test)
  .post("/add", addTest)
  .delete("/delete", deleteTask)
  .patch("/update", updateTask)
  .patch("/checked/:id", checkedTask)
  .get("/count", countTask);

module.exports.testRouter = router;
