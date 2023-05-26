const express = require("express");
const {
    getList, getLists, createList, deleteList, updateList, doneList, getCount,
} = require("../controller/list.controller")

const router = express.Router();

router
    .get("/lists/", getLists)
    .get("/list/:id", getList)
    .post("/add", createList)
    .delete("/remove/:id", deleteList)
    .put("/update/:id", updateList)
    .get("/count", getCount);

exports.listRoutes = router;