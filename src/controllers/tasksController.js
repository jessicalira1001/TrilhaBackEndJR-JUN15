const tasksModel = require("../models/tasksModel");


const listTasks = (req, res) => {
    const tasks = tasksModel.getTasks();
    res.status(200).json(tasks);
}

const addTasks = (req, res) => {
    const { title } = req.body;
    const newTask = tasksModel.createTask(title);
    res.status(201).json(newTask);
}

const deleteTask = (req, res) => {
    const {id} = req.params;
    tasksModel.deleteTask(parseInt(id));
    res.status(200).json({ message: 'Tarefa deletada!'});
}

const updateTask = (req, res) => {
    const {id} = req.params;
    const {novaDescricao} = req.body;
    const updatedTask = tasksModel.updateTask(parseInt(id), novaDescricao);
    res.status(200).json(updatedTask);
}


module.exports = {
    listTasks,
    addTasks,
    deleteTask,
    updateTask
}