const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const { taskRoutes } = require("./routes/task.routes");

const app = express();

const port = process.env.PORT || 3000;

connect();

app.use(cors());
app.use(express.json());

app.use(taskRoutes);

app.get("/", (_req, res) => {
  res.send("Todo list backend");
});

app.get("/test", (_req, res) => {
  res.send("This is test endpoint");
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
