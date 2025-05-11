const Usuario = require('../models/Usuario');

exports.crearUsuario = async(req, res) => {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json(usuario);
};

exports.obtenerUsuarios = async(req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};

exports.editarUsuario = async(req, res) => {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(usuario);
};

exports.eliminarUsuario = async(req, res) => {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Usuario eliminado' });
};