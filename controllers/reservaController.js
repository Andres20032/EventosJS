const Reserva = require('../models/Reserva');

exports.crearReserva = async(req, res) => {
    const reserva = new Reserva(req.body);
    await reserva.save();
    res.json(reserva);
};

exports.obtenerReservas = async(req, res) => {
    const reservas = await Reserva.find();
    res.json(reservas);
};

exports.editarReserva = async(req, res) => {
    const reserva = await Reserva.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(reserva);
};

exports.eliminarReserva = async(req, res) => {
    await Reserva.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Reserva eliminada' });
};