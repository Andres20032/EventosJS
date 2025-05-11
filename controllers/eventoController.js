const Evento = require('../models/Evento');

exports.crearEvento = async(req, res) => {
    const evento = new Evento(req.body);
    await evento.save();
    res.json(evento);
};

exports.obtenerEventos = async(req, res) => {
    const eventos = await Evento.find();
    res.json(eventos);
};

exports.editarEvento = async(req, res) => {
    const evento = await Evento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(evento);
};

exports.eliminarEvento = async(req, res) => {
    await Evento.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Evento eliminado' });
};