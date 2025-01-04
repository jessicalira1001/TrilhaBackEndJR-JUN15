import { openDb } from '../database/configDB.js';

export async function createTableTasks () {
    openDb().then(db =>{
        db.exec(`CREATE TABLE IF NOT EXISTS tasks ( id INTEGER PRIMARY KEY AUTOINCREMENT, descricao TEXT NOT NULL )`);
    })
};

export async function insertTask (descricao) {
    openDb().then(db =>{
        db.run('INSERT INTO tasks (descricao) VALUES (?)', [descricao]);
    })
};

export async function updateTask (descricao, id) {
    openDb().then(db =>{
        db.run('UPDATE tasks SET descricao=? WHERE id=?', [descricao, id]);
    })
};

export async function deleteTask (id) {
    openDb().then(db =>{
        db.run('DELETE FROM tasks WHERE id=?', [id]);
    })
};
