const express = require("express");
const cors = require("cors");
const router = require("./routes/listRoutes");
const connectDb = require("./config/db");

const app = express();

// Connect to Database

// Pre Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(cors());
app.use(express.json());
// Routes
app.use(router);

app.get("/", (req, res) => {
  res.send("todo list backend");
});
connectDb();
// Listen
app.listen(5000, () => console.log("Server started on port 5000"));
