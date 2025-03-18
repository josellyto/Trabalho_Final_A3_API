// controllers/gestorController.js
const { Gestor } = require('../models');

const gestorController = {
  async createGestor(req, res) {
    try {
      const gestor = await Gestor.create(req.body);
      res.status(201).json(gestor);
    } catch (err) {
      res.status(400).json({ message: 'Erro ao cadastrar gestor', error: err.message });
    }
  },

  async getGestores(req, res) {
    try {
      const gestores = await Gestor.findAll();
      res.status(200).json(gestores);
    } catch (err) {
      res.status(400).json({ message: 'Erro ao obter gestores', error: err.message });
    }
  },

  // Outras funções do Gestor (editar, deletar, etc.)
};

module.exports = gestorController;
