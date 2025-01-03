import { createTableTasks} from './models/tasksModel.js';
import express from 'express';
import {rota} from './routes/routesTasks.js';

const app = express();
const port = 3000;

createTableTasks();

app.get('/', (req, res) => {
  res.send('Olá, Pessoas!');
});

app.use(express.json());

app.use(rota)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
