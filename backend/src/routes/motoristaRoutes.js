// routes/motoristaRoutes.js
const express = require('express');
const motoristaController = require('../controllers/motoristaController');
const router = express.Router();

// Rota para criar um motorista
router.post('/', motoristaController.createMotorista);

// Rota para listar todos os motoristas
router.get('/', motoristaController.getMotoristas);

// Rota para obter um motorista por ID
router.get('/:id', motoristaController.getMotoristaById);

// Rota para atualizar um motorista
router.put('/:id', motoristaController.updateMotorista);

// Rota para deletar um motorista
router.delete('/:id', motoristaController.deleteMotorista);

module.exports = router;
