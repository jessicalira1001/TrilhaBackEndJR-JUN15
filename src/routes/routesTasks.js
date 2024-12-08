const express = require("express");

const {listTasks} = require('../controllers/tasksController');


const routesTasks = express();

routesTasks.post("/tasks");
routesTasks.get("/tasks", listTasks);
routesTasks.put("/tasks/:id?");
routesTasks.delete("/tasks:id?");


module.exports = routesTasks;