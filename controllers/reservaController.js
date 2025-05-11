// src/controllers/reservaController.js

let reservas = []; // Simula la base de datos
let id = 1;

// Crear una reserva
exports.crearReserva = (req, res) => {
    const nuevaReserva = { id: id++, ...req.body };
    reservas.push(nuevaReserva);
    res.status(201).json(nuevaReserva);
};

// Obtener todas las reservas
exports.obtenerReservas = (req, res) => {
    res.json(reservas);
};

// Editar una reserva
exports.editarReserva = (req, res) => {
    const reservaId = parseInt(req.params.id);
    const index = reservas.findIndex(r => r.id === reservaId);
    if (index === -1) {
        return res.status(404).json({ mensaje: 'Reserva no encontrada' });
    }
    reservas[index] = { id: reservaId, ...req.body };
    res.json(reservas[index]);
};

// Eliminar una reserva
exports.eliminarReserva = (req, res) => {
    const reservaId = parseInt(req.params.id);
    reservas = reservas.filter(r => r.id !== reservaId);
    res.json({ mensaje: 'Reserva eliminada' });
};