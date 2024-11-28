const express = require('express');
const app = express();
const port = 3000;


const routesTasks = require("./routes/routesTasks");


app.get('/', (req, res) => {
  res.send('Olá, Pessoas!');
});

app.use(express.json());
  
app.use(routesTasks)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
