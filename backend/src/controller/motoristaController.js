// controllers/motoristaController.js
const { Motorista } = require('../models');

const motoristaController = {
  async createMotorista(req, res) {
    try {
      const motorista = await Motorista.create(req.body);
      res.status(201).json(motorista);
    } catch (err) {
      res.status(400).json({ message: 'Erro ao cadastrar motorista', error: err.message });
    }
  },

  async getMotoristas(req, res) {
    try {
      const motoristas = await Motorista.findAll();
      res.status(200).json(motoristas);
    } catch (err) {
      res.status(400).json({ message: 'Erro ao obter motoristas', error: err.message });
    }
  },

  async getMotoristaById(req, res) {
    try {
      const motorista = await Motorista.findByPk(req.params.id);
      if (!motorista) {
        return res.status(404).json({ message: 'Motorista não encontrado' });
      }
      res.status(200).json(motorista);
    } catch (err) {
      res.status(400).json({ message: 'Erro ao obter motorista', error: err.message });
    }
  },

  async updateMotorista(req, res) {
    try {
      const motorista = await Motorista.findByPk(req.params.id);
      if (!motorista) {
        return res.status(404).json({ message: 'Motorista não encontrado' });
      }
      await motorista.update(req.body);
      res.status(200).json(motorista);
    } catch (err) {
      res.status(400).json({ message: 'Erro ao atualizar motorista', error: err.message });
    }
  },

  async deleteMotorista(req, res) {
    try {
      const motorista = await Motorista.findByPk(req.params.id);
      if (!motorista) {
        return res.status(404).json({ message: 'Motorista não encontrado' });
      }
      await motorista.destroy();
      res.status(200).json({ message: 'Motorista deletado com sucesso' });
    } catch (err) {
      res.status(400).json({ message: 'Erro ao deletar motorista', error: err.message });
    }
  }
};

module.exports = motoristaController;
