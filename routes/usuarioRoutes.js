const express = require('express');
const router = express.Router();

let usuarios = [
    { id: 1, nombre: "Ana", email: "ana@example.com" },
    { id: 2, nombre: "Luis", email: "luis@example.com" }
];

router.get('/', (req, res) => res.json(usuarios));

router.get('/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    usuario ? res.json(usuario) : res.status(404).json({ mensaje: "Usuario no encontrado" });
});

router.post('/', (req, res) => {
    const nuevo = { id: usuarios.length + 1, ...req.body };
    usuarios.push(nuevo);
    res.status(201).json(nuevo);
});

router.put('/:id', (req, res) => {
    const i = usuarios.findIndex(u => u.id === parseInt(req.params.id));
    i !== -1 ? (usuarios[i] = { id: parseInt(req.params.id), ...req.body }, res.json(usuarios[i])) : res.status(404).json({ mensaje: "Usuario no encontrado" });
});

router.delete('/:id', (req, res) => {
    const i = usuarios.findIndex(u => u.id === parseInt(req.params.id));
    i !== -1 ? (usuarios.splice(i, 1), res.status(204).end()) : res.status(404).json({ mensaje: "Usuario no encontrado" });
});

module.exports = router;