// models/motorista.js
module.exports = (sequelize, DataTypes) => {
    const Motorista = sequelize.define('Motorista', {
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      telefone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cpf: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      // Adicione outros campos conforme necessário
    });
  
    Motorista.associate = function(models) {
      // Caso o motorista tenha relacionamento com outras tabelas, adicione aqui
    };
  
    return Motorista;
  };
  