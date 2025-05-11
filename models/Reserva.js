const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
    cliente: String,
    evento: String,
    cantidad: Number,
    fechaReserva: Date
});

module.exports = mongoose.model('Reserva', reservaSchema);