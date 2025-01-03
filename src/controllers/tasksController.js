import { insertTask, updateTask, deleteTask } from "../models/tasksModel.js";


const addTasks = (req, res) => {
    const { descricao } = req.body;
    const newTask = insertTask(descricao); 
    return res.status(201).json(newTask);
}

const atualizaTask = (req, res) => {
    const { descricao } = req.body;
    const { id } = req.params;
    const newTask = updateTask(descricao, id);
    return res.status(201).json(newTask);
}

const apagaTask = (req, res) => {
    const { id } = req.params;
    const newTask = deleteTask(id);
    return res.status(200).json(newTask);
}


export default (addTasks, atualizaTask, apagaTask);
