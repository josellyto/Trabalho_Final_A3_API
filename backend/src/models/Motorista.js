// src/models/Motorista.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Motorista extends Model {}

Motorista.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Motorista',
});

module.exports = Motorista;
