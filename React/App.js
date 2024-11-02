import React, { useState, useEffect } from 'react';
import BookForm from './Componentes/BookForm';
import BookList from './Componentes/BookList';
import './App.css';

function App() {
  const [libros, setLibros] = useState([]); 
  const [libroSeleccionado, setLibroSeleccionado] = useState(null);
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/libros')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setLibros(data); 
        } else {
          setLibros([]); 
        }
      })
      .catch(error => {
        console.error("Error al cargar los libros:", error);
        setLibros([]); 
      });
  }, []);

  const agregarLibro = (nuevoLibro) => {
    fetch('http://localhost:5000/api/libros', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoLibro),
    })
      .then(response => response.json())
      .then(data => {
        setLibros(prevLibros => [...prevLibros, data]);
      })
      .catch(error => {
        console.error("Error al agregar el libro:", error);
      });
  };

  const actualizarLibro = (libroActualizado) => {
    fetch(`http://localhost:5000/api/libros/${libroActualizado.titulo}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(libroActualizado),
    })
      .then(response => response.json())
      .then(data => {
        setLibros(prevLibros =>
          prevLibros.map(libro => (libro.titulo === libroActualizado.titulo ? data : libro))
        );
        setEditando(false);
        setLibroSeleccionado(null);
      })
      .catch(error => {
        console.error("Error al actualizar el libro:", error);
      });
  };

  const eliminarLibro = (titulo) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este libro?')) {
      fetch(`http://localhost:5000/api/libros/${titulo}`, {
        method: 'DELETE',
      })
        .then(() => {
          setLibros(prevLibros => prevLibros.filter(libro => libro.titulo !== titulo));
        })
        .catch(error => {
          console.error("Error al eliminar el libro:", error);
        });
    }
  };

  const editarLibro = (libro) => {
    setLibroSeleccionado(libro);
    setEditando(true);
  };

  return (
    <div className="app-container">
      <h1>LibroHub</h1>
      <BookForm
        agregarLibro={agregarLibro}
        actualizarLibro={actualizarLibro}
        editando={editando}
        libroSeleccionado={libroSeleccionado}
      />
      <BookList
        libros={libros}
        editarLibro={editarLibro}
        eliminarLibro={eliminarLibro}
      />
    </div>
  );
}

export default App;
