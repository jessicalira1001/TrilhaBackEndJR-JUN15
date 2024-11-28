const bancoDeDados = require("../bancoDeDadosTeste");

const getTasks = () =>{
    return bancoDeDados.tasksBD;
}


module.exports = {
    getTasks
}