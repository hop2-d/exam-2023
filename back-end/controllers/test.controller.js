const Test = require("../models/test.model");

const createTest = async (req, res) => {
  const { name } = req.body;
  const result = await new Test({ name }).save();
  res.send(result);
};

const getTests = async (req, res) => {
  const result = await Test.find({});
  res.send(result);
};

const getTest = async (req, res) => {
  const result = await Test.findById(req.params.id);
  res.send(result);
};

const deleteTest = async (req, res) => {
  const id = req.params.id;
  const result = await Test.findByIdAndDelete(id);
  res.send(result);
};

const updateTest = async (req, res) => {
  const testId = req.params.id;
  const name = req.body.name;
  const test = await Test.findById(testId);
  test.name = name;
  await test.save();
  res.send(test);
};

const doneTest = async (req, res) => {
  const testId = req.params.id;
  const name = req.body.name;
  const test = await Test.findById(testId);
  test.name.push;
  await test.save();
  res.send(test);
};

module.exports = {
  createTest,
  getTests,
  getTest,
  deleteTest,
  updateTest,
  doneTest,
};
