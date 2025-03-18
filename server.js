// src/server.js
const express = require('express');
const sequelize = require('./config/database');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await sequelize.sync({ force: true });  // Isso cria as tabelas com base nos modelos
    console.log('Database synced!');
  } catch (error) {
    console.error('Error syncing database: ', error);
  }
});
