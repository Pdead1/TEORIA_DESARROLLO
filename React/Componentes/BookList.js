import React, { useState } from 'react';

function BookList({ libros, editarLibro, eliminarLibro }) {
  const [libroViendo, setLibroViendo] = useState(null);

  return (
    <div className="book-list">
      {libroViendo ? (
        <div className="book-details">
          <h3>{libroViendo.titulo}</h3>
          <p>Autor: {libroViendo.autor}</p>
          <p>Año: {libroViendo.anio}</p>
          <p>Género: {libroViendo.genero}</p>
          <p>Descripción: {libroViendo.descripcion}</p>
          <button onClick={() => setLibroViendo(null)}>Regresar</button>
        </div>
      ) : libros.length === 0 ? (
        <p>No hay libros disponibles.</p>
      ) : (
        libros.map((libro) => (
          <div key={libro.id} className="book-item">
            <h3>{libro.titulo}</h3>
            <button onClick={() => setLibroViendo(libro)}>Ver</button>
            <button onClick={() => editarLibro(libro)}>Editar</button>
            <button onClick={() => eliminarLibro(libro.id)}>Eliminar</button>
          </div>
        ))
      )}
    </div>
  );
}

export default BookList;
