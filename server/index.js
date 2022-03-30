require("dotenv").config();

const Server = require("./models/server");

// Si es primera vez corriendo el servidor
// Pasar parametro withMigrations en true, para insertar datos en la db
// Solo si es primera vez
const server = new Server({ withMigrations: true });

server.start();
