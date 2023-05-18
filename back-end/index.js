const express = require("express");
const cors = require("cors");

const connect = require("./helper/db");
const routes = require("./routes");

const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());

connect();

app.use("/", routes.taskRouter);

app.get("/", async (req, res) => {
  await connect();
  res.send("Todo list backend");
});

app.get("/test", async (req, res) => {
  await connect();
  res.send("This is test endpoint");
});

app.listen(port, () => {
  console.log("Server is running at: http://localhost:" + port);
});
