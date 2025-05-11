const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // Carga variables desde .env

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Servidor Node funcionando!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
