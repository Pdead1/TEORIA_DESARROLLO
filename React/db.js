const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',        // usuario de PostgreSQL
  host: 'localhost',       // host donde está PostgreSQL
  database: 'proyecto_libros', // base de datos
  password: 'root',        // contraseña de PostgreSQL
  port: 5433,              // Puerto de PostgreSQL
});

module.exports = pool;
