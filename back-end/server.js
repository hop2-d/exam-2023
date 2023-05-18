require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./db");
const { testRouter } = require("./routes/test.routes");

const port = process.env.PORT || 4010;

const app = express();

connect();

app.use(cors());
app.use(express.json());
app.use(testRouter);
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (_req, res) => {
  res.send("backend");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});