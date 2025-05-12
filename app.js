const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Cargar variables de entorno

const app = express();
app.use(cors());
app.use(express.json());

// ⚠️ MongoDB deshabilitado para esta versión simulada
// const conectarDB = require('./config/db');
// conectarDB(); ❌ Comentado porque no vamos a usar MongoDB

// Rutas de la API (datos simulados en memoria)
app.use('/api/eventos', require('./routes/eventoRoutes'));
app.use('/api/usuarios', require('./routes/usuarioRoutes'));
app.use('/api/reservas', require('./routes/reservaRoutes'));

// Ruta raíz para comprobar funcionamiento
app.get('/', (req, res) => {
    res.send('🟢 API EventosJS funcionando sin base de datos');
});

// Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});