import React, { useState, useEffect } from 'react';

function BookForm({ agregarLibro, actualizarLibro, editando, libroSeleccionado }) {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [anio, setAnio] = useState('');
  const [genero, setGenero] = useState('');
  const [descripcion, setDescripcion] = useState('');

  useEffect(() => {
    if (editando && libroSeleccionado) {
      setTitulo(libroSeleccionado.titulo);
      setAutor(libroSeleccionado.autor);
      setAnio(libroSeleccionado.anio);
      setGenero(libroSeleccionado.genero);
      setDescripcion(libroSeleccionado.descripcion);
    }
  }, [editando, libroSeleccionado]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titulo && autor && anio && genero && descripcion) {
      const nuevoLibro = {
        id: editando ? libroSeleccionado.id : Date.now(),
        titulo,
        autor,
        anio,
        genero,
        descripcion,
      };

      if (editando) {
        actualizarLibro(nuevoLibro);
      } else {
        agregarLibro(nuevoLibro);
      }

      setTitulo('');
      setAutor('');
      setAnio('');
      setGenero('');
      setDescripcion('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        placeholder="Título del libro"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Autor"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Año"
        value={anio}
        onChange={(e) => setAnio(e.target.value)}
        min="1800"
        max="2100"
        required
      />
      <input
        type="text"
        placeholder="Género"
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
        required
      />
      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        required
      ></textarea>
      <button type="submit">{editando ? 'Actualizar Libro' : 'Agregar Libro'}</button>
    </form>
  );
}

export default BookForm;
