require('dotenv').config();
let { connection , connect } = require('mongoose');
const db = connection;

Promise = global.Promise;

const dbUrl = process.env.DB;

db.on('error', function (error) {
  console.error(`Error en la conexión de MONGODB: ${error}`);
  process.exit(1);
});

db.once('open', function () {
  console.info('MongoDb a la escucha');
});

connect(dbUrl);

module.exports = db;