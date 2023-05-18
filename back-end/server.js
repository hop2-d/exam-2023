const express = require("express");
const cors = require("cors");
const connect = require("./common/config/db");
const { taskRouter } = require("./routes/taskRoute");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

connect();

app.use(taskRouter);

app.get("/", async (req, res) => {
  res.send("Todo list backend");
});

app.get("/test", async (req, res) => {
    res.send("This is test endpoint");
  });



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
