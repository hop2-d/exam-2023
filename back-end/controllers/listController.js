const List = require("../models/listModel");

const createList = async (req, res) => {
  //   const body = req.body;
  const result = await List.create(req.body);
  res.send(result);
};

const getLists = async (req, res) => {
  const result = await List.find({});
  res.send(result);
};
const getList = async (req, res) => {
  const result = await List.findById(req.params.id);
  res.send(result);
};
const deleteList = async (req, res) => {
  const id = req.params.id;
  const result = await List.findByIdAndDelete({ _id: id });
};

module.exports = { createList, getLists, getList, deleteList };
