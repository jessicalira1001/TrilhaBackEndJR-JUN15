import express from "express";

import addTasks from '../controllers/tasksController.js'
import atualizaTask from '../controllers/tasksController.js'
import apagaTask from '../controllers/tasksController.js'


export const rota = express.Router();

rota.post("/tasks", addTasks);
//rota.get("/tasks", listTasks);
rota.put("/tasks/:id?", atualizaTask);
rota.delete("/tasks/:id?", apagaTask);

