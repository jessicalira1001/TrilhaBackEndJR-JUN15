const bancoDeDados = require("../bancoDeDadosTeste");

const getTasks = () =>{
    return bancoDeDados.tasksBD;
}

const createTask = (title) => {
    const newTask = { id: bancoDeDados.tasksBD.length, descricao: title};
    bancoDeDados.tasksBD.push(newTask);
    return newTask;
}


module.exports = {
    getTasks,
    createTask
}