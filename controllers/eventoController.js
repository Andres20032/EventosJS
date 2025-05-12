// Simulación de base de datos en memoria
let eventos = [{
    id: "1",
    title: "Concierto de Año Nuevo",
    date: "2025-12-31",
    location: "Auditorio Central",
    capacity: 500,
    description: "Evento musical para despedir el año con artistas invitados"
}];

// Crear evento
exports.crearEvento = (req, res) => {
    const nuevoEvento = {
        id: (eventos.length + 1).toString(),
        ...req.body
    };
    eventos.push(nuevoEvento);
    res.status(201).json(nuevoEvento);
};

// Obtener todos los eventos
exports.obtenerEventos = (req, res) => {
    res.json(eventos);
};

// Editar evento por ID
exports.editarEvento = (req, res) => {
    const { id } = req.params;
    const index = eventos.findIndex(e => e.id === id);
    if (index === -1) return res.status(404).json({ mensaje: 'Evento no encontrado' });

    eventos[index] = {...eventos[index], ...req.body };
    res.json(eventos[index]);
};

// Eliminar evento por ID
exports.eliminarEvento = (req, res) => {
    const { id } = req.params;
    const index = eventos.findIndex(e => e.id === id);
    if (index === -1) return res.status(404).json({ mensaje: 'Evento no encontrado' });

    const eliminado = eventos.splice(index, 1);
    res.json({ mensaje: 'Evento eliminado', evento: eliminado[0] });
};