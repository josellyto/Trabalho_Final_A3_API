// models/carro.js
module.exports = (sequelize, DataTypes) => {
    const Carro = sequelize.define('Carro', {
      modelo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      placa: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      cor: {
        type: DataTypes.STRING,
        allowNull: false
      },
      marca: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ano: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      odometro_atual: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM,
        values: ['disponivel', 'indisponivel'],
        defaultValue: 'disponivel',
        allowNull: false
      },
      // Outros campos necessários
    });
  
    Carro.associate = function(models) {
      // Caso o carro tenha relacionamento com outras tabelas, adicione aqui
    };
  
    return Carro;
  };
  