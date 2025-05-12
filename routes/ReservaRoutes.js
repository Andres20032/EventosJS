const express = require('express');
const router = express.Router();

let reservas = [
    { id: 1, usuarioId: 1, eventoId: 2 },
    { id: 2, usuarioId: 2, eventoId: 1 }
];

router.get('/', (req, res) => res.json(reservas));

router.get('/:id', (req, res) => {
    const reserva = reservas.find(r => r.id === parseInt(req.params.id));
    reserva ? res.json(reserva) : res.status(404).json({ mensaje: "Reserva no encontrada" });
});

router.post('/', (req, res) => {
    const nueva = { id: reservas.length + 1, ...req.body };
    reservas.push(nueva);
    res.status(201).json(nueva);
});

router.put('/:id', (req, res) => {
    const i = reservas.findIndex(r => r.id === parseInt(req.params.id));
    i !== -1 ? (reservas[i] = { id: parseInt(req.params.id), ...req.body }, res.json(reservas[i])) : res.status(404).json({ mensaje: "Reserva no encontrada" });
});

router.delete('/:id', (req, res) => {
    const i = reservas.findIndex(r => r.id === parseInt(req.params.id));
    i !== -1 ? (reservas.splice(i, 1), res.status(204).end()) : res.status(404).json({ mensaje: "Reserva no encontrada" });
});

module.exports = router;