const express = require("express")
const { getTasks, deleteTasks, createTasks, changeTasks } = require("../components/stuff")

const router = express.Router();

router
    .post("/add", createTasks)
    .get("/list", getTasks)
    .delete("/delete/:id", deleteTasks)
    .put("/change/:id", changeTasks)

exports.taskrouter = router;