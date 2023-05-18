const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connect = require("./config/db");
const { listRoutes } = require("./Routes/list.routes")

console.log(`${process.env.PORT}`);

const app = express();

const port = process.env.PORT || 12345;

connect();

app.use(cors());
app.use(express.json());

app.use(listRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
  console.log("Successfully connected");
});
