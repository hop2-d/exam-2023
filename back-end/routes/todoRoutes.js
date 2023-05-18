const express = require("express");
const { getTest, getList, getCount, createTask, deleteTask, updateTask, checkTask, deleteTasks } = require("../controller/todoController");
const { HandleErrorTask, HandleErrorId, HandleErrorBool } = require("../middleware/todoMid");
const router = express.Router()

router
    .get("/test", getTest)
    .get("/list", getList)
    .get("/count", getCount)
    .post("/add", HandleErrorTask, createTask)
    .delete("/delete", HandleErrorId, deleteTask)
    .delete("/admin", deleteTasks)                              // Бүх таскыг устгах нууц ROUTE
    .patch("/update", HandleErrorTask, HandleErrorId, updateTask)
    .patch("/checked", HandleErrorBool, HandleErrorId, checkTask)

exports.TodoRouter = router;
