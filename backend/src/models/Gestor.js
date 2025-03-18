// src/models/Gestor.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Gestor extends Model {}

Gestor.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Gestor',
});

module.exports = Gestor;
