const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
    nombre: String,
    fecha: Date,
    lugar: String,
    capacidad: Number
});

module.exports = mongoose.model('Evento', eventoSchema);