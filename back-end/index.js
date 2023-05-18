const connect = require("../back-end/config");
const express = require("express");
const { todoRouter } = require("../back-end/routes/todoRoute");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

app.use(todoRouter);

connect();

app.listen(port, () => {
  console.log("Server is running at", port);
});
