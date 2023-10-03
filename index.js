const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.options('*', cors());
require("./config");

const toDoRoutes = require('./routers/to-do');


app.use(express.json());

app.use('/api/v1/to-do',toDoRoutes);

app.listen(3000);
