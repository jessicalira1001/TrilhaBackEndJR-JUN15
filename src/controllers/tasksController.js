//const bancoDeDados = require("../bancoDeDadosTeste");
const tasksModel = require("../models/tasksModel");


const listTasks = (req, res) => {
    const tasks = tasksModel.getTasks();
    res.json(tasks);
}



/** 
const createTask = (req, res) => {

}
*/



module.exports = {
    listTasks
}