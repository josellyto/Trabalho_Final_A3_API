const express = require('express');
const sequelize = require('./config/database');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    // Teste de conexão com o banco de dados
    await sequelize.authenticate();  // Verifica a conexão com o banco
    console.log('Database connection established successfully.');

    // Sincronize o banco de dados
    await sequelize.sync({ force: false }); // force: false para não apagar as tabelas
    console.log('Database synced!');
  } catch (error) {
    console.error('Error syncing database: ', error);
  }
});
