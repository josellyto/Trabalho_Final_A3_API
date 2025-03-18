// routes/gestorRoutes.js
const express = require('express');
const gestorController = require('../controllers/gestorController');
const router = express.Router();

router.post('/', gestorController.createGestor);
router.get('/', gestorController.getGestores);

module.exports = router;
