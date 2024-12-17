const express = require("express");

const {listTasks, addTasks} = require('../controllers/tasksController');


const routesTasks = express();

routesTasks.post("/tasks", addTasks);
routesTasks.get("/tasks", listTasks);
routesTasks.put("/tasks/:id?");
routesTasks.delete("/tasks:id?");


module.exports = routesTasks;