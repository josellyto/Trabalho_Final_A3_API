// src/models/Eventos.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Evento extends Model {}

Evento.init({
  tipo_evento: {
    type: DataTypes.STRING,
    allowNull: false
  },
  odometro: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  data_hora: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Evento',
});

module.exports = Evento;
