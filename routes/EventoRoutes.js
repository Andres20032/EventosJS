const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');

router.post('/', eventoController.crearEvento);
router.get('/', eventoController.obtenerEventos);
router.put('/:id', eventoController.editarEvento);
router.delete('/:id', eventoController.eliminarEvento);

module.exports = router;
