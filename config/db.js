const mongoose = require('mongoose');

const conectarDB = async() => {
    if (!process.env.MONGO_URI) {
        console.error('🔴 MONGO_URI no está definida en las variables de entorno');
        process.exit(1);
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, // Usar el nuevo parser de URL
            useUnifiedTopology: true, // Habilitar el nuevo motor de topología
            useFindAndModify: false, // Evitar advertencias sobre findAndModify
        });
        console.log("🟢 Conectado a MongoDB");
    } catch (error) {
        console.error("🔴 Error al conectar a la base de datos:", error);
        process.exit(1); // Detener la aplicación si la conexión falla
    }
};

module.exports = conectarDB;