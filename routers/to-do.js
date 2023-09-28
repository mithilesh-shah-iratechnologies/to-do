const express = require("express");

const routes = express.Router();
const {
  createToDo,
  getAllToDo,
  getToDoById,
  updateToDo,
  deleteToDo,
} = require("../controllers/to-to");

routes.route("/create").post(createToDo);
routes.route("/all").get(getAllToDo);
routes.route("/:_id").get(getToDoById);
routes.route("/:_id").put(updateToDo);
routes.route("/:_id").delete(deleteToDo);

module.exports = routes;
