// Importando as dependências
const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./models');  // Para conectar ao banco de dados
//const gestorRoutes = require('./routes/gestorRoutes');
//const motoristaRoutes = require('./routes/motoristaRoutes');
//const carroRoutes = require('./routes/carroRoutes');
//const eventoRoutes = require('./routes/eventoRoutes');

// Carregando as variáveis de ambiente
dotenv.config();

// Inicializando o app Express
const app = express();
app.use(express.json());  // Para ler o corpo da requisição no formato JSON

const motoristaRoutes = require('./routes/motoristaRoutes');
app.use('/motoristas', motoristaRoutes);

// Usando as rotas
app.use('/gestores', gestorRoutes);
app.use('/motoristas', motoristaRoutes);
app.use('/carros', carroRoutes);
app.use('/eventos', eventoRoutes);

// Conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados bem-sucedida!');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

// Definindo a porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
