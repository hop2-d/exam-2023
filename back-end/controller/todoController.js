const bcrypt = require("bcrypt");
const { TaskModel } = require("../model/todoModel");
const jwt = require("jsonwebtoken");

const getTest = async (req, res) => {
  try {
    res.send("This is test endpoint");
  }
  catch (err) {
    res.send(err)
  }
};
const getList = async (req, res) => {
  try {
    const result = await TaskModel.find({})
    res.send(result);
  }
  catch (err) {
    res.send(err)
  }
};
const getCount = async (req, res) => {
  try {
    const result = await TaskModel.find({ isDone: true })

    res.send(String(result.length));
  }
  catch (err) {
    res.send(err)
  }
};
const createTask = async (req, res) => {
  try {
    const result = await new TaskModel({ text: req.body.text }).save()
    res.send(result);
  }
  catch (err) {
    res.send(err)
  }
};
const deleteTask = async (req, res) => {
  try {
    const result = await TaskModel.findByIdAndDelete(req.body._id)
    res.send(result);
  }
  catch (err) {
    res.send(err)
  }
};
const deleteTasks = async (req, res) => {
  try {
    const result = await TaskModel.deleteMany()
    res.send(result);
  }
  catch (err) {
    res.send(err)
  }
};
const updateTask = async (req, res) => {
  try {
    const result = await TaskModel.findByIdAndUpdate(req.body._id, { text: req.body.text })
    res.send(result);
  }
  catch (err) {
    res.send(err)
  }
};
const checkTask = async (req, res) => {
  try {
    const result = await TaskModel.findByIdAndUpdate(req.body._id, { isDone: req.body.isDone })
    res.send(result);
  }
  catch (err) {
    res.send(err)
  }
};


module.exports = {
  getTest, getList, getCount, createTask, deleteTask, updateTask, checkTask,deleteTasks
};
