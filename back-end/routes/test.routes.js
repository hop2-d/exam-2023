const express = require("express");
const {
  getTests,
  createTest,
  getTest,
  deleteTest,
  updateTest,
  doneTest,
} = require("../controllers/test.controller");

const router = express.Router();

router
  .get("/tests", getTests)
  .get("/test/:id", getTest)
  .post("/test", createTest)
  .delete("/test/:id", deleteTest)
  .put("/update/:id", updateTest)
  // .put("/test/:id", doneTest);

exports.testRoutes = router;
