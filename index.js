const express = require("express");
const ToDo = require("./to-do");
require("./config");

const app = express();

const api = "/api/v1/to-do";

app.use(express.json());

// Create to-do
app.post(`${api}/create`, async (req, res) => {
  const data = new ToDo(req.body);
  const savedToDo = await data.save();
  res.send(savedToDo);
});

// Get all todo's
app.get(`${api}/all`, async (req, res) => {
  const toDoList = await ToDo.find();
  res.send(toDoList);
});

// Get to-do by id
app.get(`${api}/:_id`, async (req, res) => {
  const toDo = await ToDo.findOne(req.params);
  res.send(toDo);
});

// Update to-do
app.put(`${api}/:_id`, async (req, res) => {
  await ToDo.updateOne(req.params, { $set: req.body });

  const updateRes = {
    message: "To-do updated successfully",
    toDoId: req.params._id,
  };

  res.send(updateRes);
});

// Delete to-do by id
app.delete(`${api}/:_id`, async (req, res) => {
  await ToDo.deleteOne(req.params);
  const deleteRes = {
    message: "To-do deleted successfully",
    toDoId: req.params._id,
  };
  res.send(deleteRes);
});

app.listen(3000);
