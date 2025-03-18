// src/models/Carro.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Carro extends Model {}

Carro.init({
  modelo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  placa: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Carro',
});

module.exports = Carro;
