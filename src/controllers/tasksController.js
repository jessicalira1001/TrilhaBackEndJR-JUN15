const tasksModel = require("../models/tasksModel");


const listTasks = (req, res) => {
    const tasks = tasksModel.getTasks();
    res.json(tasks);
}

const addTasks = (req, res) => {
    const { title } = req.body;
    const newTask = tasksModel.createTask(title);
    res.status(201).json(newTask);
}


module.exports = {
    listTasks,
    addTasks
}