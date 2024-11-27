const express = require("express");

const routesTasks = express.Router();

routesTasks.post("/tasks");
routesTasks.get("/tasks");
routesTasks.put("/tasks/:id?");
routesTasks.delete("/tasks:id?");


module.exports = routesTasks;