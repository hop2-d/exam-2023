const { List } = require("../model/list.model")

const createList = async (req, res) => {
    const { text } = req.body;
    const result = await new List({ text }).save();
    res.send(result);
};

const getLists = async (req, res) => {
    try {
        const result = await List.find({});
        res.send(result);
    } catch (error) {
        console.log(error)
    }
};

const getCount = async (req, res) => {
    try {
        const resilt = await List.find({ isDone: true });
        res.send(String(resilt.length));
    } catch (err) {
        res.send(err);
    }
};

const getList = async (req, res) => {
    const result = await List.findById(req.params.id);
    res.send(result);
};

const deleteList = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        const result = await List.findByIdAndDelete(id);
        res.send(result);
    } catch (error) {
        console.log(error)
    }
};

const updateList = async (req, res) => {
    const listId = req.params.id;
    const name = req.body.name;
    const list = await List.findById(listId);
    list.name = name;
    await list.save();
    res.send(list);
};
const updateListCheck = async (req, res) => {
    const listId = req.params.id;
    const name = req.body.check;
    const list = await List.findByIdAndUpdate(listId, { check });
    await list.save();
    res.send(list);
};

const doneList = async (req, res) => {
    const listId = req.params.id;
    const name = req.body.name;
    const list = await List.findById(listId);
    list.name.push;
    await list.save();
    res.send(list);
};

module.exports = {
    createList,
    getLists,
    getList,
    deleteList,
    updateList,
    doneList,
    getCount,
    updateListCheck
};