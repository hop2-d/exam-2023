const express = require("express");
const cors = require("cors");
const connect = require("./config/database");
const { testRoutes } = require("./routes/test.routes");

require("dotenv").config();

const port = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());

connect();

app.use(testRoutes);

app.get("/", (req, res) => {
  res.send("Todo list backend");
});

app.listen(port, () => {
  console.log("Todo list backend");
});
