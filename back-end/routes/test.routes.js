const express = require("express");
const {
  getTests,
  createTest,
  getTest,
  deleteTest,
  updateTest,
  doneTest,
  getCount,
} = require("../controllers/test.controller");

const router = express.Router();

router
  .get("/tests", getTests)
  .get("/test/:id", getTest)
  .post("/add", createTest)
  .delete("/delete/:id", deleteTest)
  .put("/update/:id", updateTest)
  .get("/count", getCount);

exports.testRoutes = router;
