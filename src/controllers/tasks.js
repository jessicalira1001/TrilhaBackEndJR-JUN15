const bancoDeDados = require("../bancoDeDadosTeste");

const listTasks = (req, res) => {
    return res.json(bancoDeDados.tasksBD);
}


module.exports = {
    listTasks
}