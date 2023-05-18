const { Router } = require('express')
const {
    Add,
    List,
    Count,
    Delete, 
    Edit, Check
} = require("../controllers/task.controller.js")

const route = Router()
route .get("/list", List).post("/add", Add).get("/count", Count).delete("/delete", Delete).patch("/update", Edit).patch("/checked", Check)

exports.TaskRoutes = route