const express = require("express"),
  cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const connect = require("./config/db");
const { todoRoutes } = require("./Routes/todo.routes");

require("dotenv").config();

app.use(express.json(), cors(), todoRoutes);

app.get("/", (req, res) => {
  res.send("Todo list backend");
});

app.listen(port, async () => {
  try {
    console.clear();
    console.log(`\x1b[32mServer on : http://localhost:${port}\n`);
    connect();
  } catch (error) {
    console.error(error);
  }
});
