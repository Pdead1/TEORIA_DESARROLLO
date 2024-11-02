const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./database/db');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/libros', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM libros');
    res.json(result.rows);
  } catch (error) {
    console.error("Error al obtener los libros:", error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/libros', async (req, res) => {
  const { titulo, autor, anio, genero, descripcion } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO libros (titulo, autor, anio, genero, descripcion) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [titulo, autor, anio, genero, descripcion]
    );
    res.json(result.rows[0]); 
  } catch (error) {
    console.error("Error al agregar el libro:", error);
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/libros/:titulo', async (req, res) => {
  const { titulo } = req.params;
  const { autor, anio, genero, descripcion } = req.body;
  try {
    const result = await pool.query(
      'UPDATE libros SET autor = $1, anio = $2, genero = $3, descripcion = $4 WHERE titulo = $5 RETURNING *',
      [autor, anio, genero, descripcion, titulo]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error al actualizar el libro:", error);
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/libros/:titulo', async (req, res) => {
  const { titulo } = req.params;
  try {
    await pool.query('DELETE FROM libros WHERE titulo = $1', [titulo]);
    res.json({ message: 'Libro eliminado exitosamente' });
  } catch (error) {
    console.error("Error al eliminar el libro:", error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
