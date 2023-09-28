const express = require("express");
require("./config");

const toDoRoutes = require('./routers/to-do');

const app = express();

app.use(express.json());

app.use('/api/v1/to-do',toDoRoutes);


app.listen(3000);
