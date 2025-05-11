const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const conectarDB = require('./config/db');

dotenv.config();
conectarDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/eventos', require('./routes/eventoRoutes'));
app.use('/api/usuarios', require('./routes/usuarioRoutes'));
app.use('/api/reservas', require('./routes/reservaRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log({ PORT });
});