const mongoose = require("mongoose");

ToDoSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: String,
});

module.exports = mongoose.model("to_do", ToDoSchema);
