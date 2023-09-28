const ToDo = require('../models/to-do')

const createToDo = async (req, res) => {
  const data = new ToDo(req.body);
  const savedToDo = await data.save();
  res.send(savedToDo);
};

const getAllToDo = async (req, res) => {
  const toDoList = await ToDo.find();
  res.send(toDoList);
};

const getToDoById = async (req, res) => {
  const toDo = await ToDo.findOne(req.params);
  res.send(toDo);
};

const updateToDo = async (req, res) => {
  await ToDo.updateOne(req.params, { $set: req.body });

  const updateRes = {
    message: "To-do updated successfully",
    toDoId: req.params._id,
  };

  res.send(updateRes);
};

const deleteToDo = async (req, res) => {
  await ToDo.deleteOne(req.params);
  const deleteRes = {
    message: "To-do deleted successfully",
    toDoId: req.params._id,
  };
  res.send(deleteRes);
};

module.exports = {
  createToDo,
  getAllToDo,
  getToDoById,
  updateToDo,
  deleteToDo,
};
