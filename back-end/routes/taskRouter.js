const { Router } = require("express");
const { getList, getCount, addTask, deleteTask, updateTask, changeCheck } = require("../controllers/taskController");

exports.taskRouter = Router().get('/list', getList).get('/count', getCount).post('/add', addTask).delete('/delete/:id', deleteTask).patch('/update/:id', updateTask).patch('/checked/:id', changeCheck);