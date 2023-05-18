require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./db");
const { testRouter } = require("./Routes/test.routes");

const port = process.env.PORT || 7070;

const app = express();

connect();

app.use(cors());
app.use(express.json());
app.use(testRouter);
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (_req, res) => {
  res.send("Todo list backend");
});

app.listen(port, () => {
  console.log(`🚀🚀🚀 Listening on port ${port} 🚀🚀🚀`);
});
