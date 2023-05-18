const express = require('express');
const {getList, createList, getLists, deleteList} = require('../controllers/listController')

const router = express.Router();

router
.get("/getlist", getList)
.get("/getlists", getLists)
.post("/lists" ,createList)
.delete("/getlist/:id", deleteList)

module.exports = router