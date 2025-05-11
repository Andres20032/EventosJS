// const conectarDB = require('./config/db');
// conectarDB(); // ❌ Eliminar o comentar

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

<<<<<<< Updated upstream
dotenv.config(); // Carga variables desde .env
=======
// Cargar variables de entorno
dotenv.config();

// Verificar que la URI de MongoDB esté cargando correctamente
console.log('Mongo URI:', process.env.MONGO_URI); // Esto imprime la URI en la consola

// Conectar a la base de datos
conectarDB();
>>>>>>> Stashed changes

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

<<<<<<< Updated upstream
app.get('/', (req, res) => {
  res.send('¡Servidor Node funcionando!');
});
=======
// Rutas principales
app.use('/api/eventos', require('./routes/eventoRoutes'));
app.use('/api/usuarios', require('./routes/usuarioRoutes'));
app.use('/api/reservas', require('./routes/reservaRoutes')); // corregido: 'ReservaRoutes' → 'reservaRoutes'
>>>>>>> Stashed changes

// Ruta base para comprobar funcionamiento
app.get('/', (req, res) => {
    res.send('🟢 API EventMaster funcionando correctamente');
});

// Puerto
const PORT = process.env.PORT || 5000;

// Iniciar servidor
app.listen(PORT, () => {
<<<<<<< Updated upstream
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
=======
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
>>>>>>> Stashed changes
