// Importa o express
const express = require('express');

// Cria a aplicação
const app = express();

// Define a porta (vai usar a variável de ambiente PORT, se existir, senão usa 3000)
const PORT = process.env.PORT || 3000;

// Rota principal (GET /)
app.get('/', (req, res) => {
  res.send('Hello World - Snack System está rodando!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
