const express = require("express");
const cors = require("cors");
require("dotenv").config();
const {connect} = require("./config/db");
const { taskRouter } = require("./routes/taskRoute")

console.log(`${process.env.PORT}`);

const app = express();

const port = process.env.PORT || 1111;

connect();

app.use(cors());
app.use(express.json());

app.use(taskRouter);

app.get("/", (req, res) => {
  res.send("Todo list backend");
});
app.get("/test", (req, res) => {
  res.send("This is test endpoint");
});

app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});
