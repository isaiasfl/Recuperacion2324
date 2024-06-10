// src/components/BuscarLibrosPorAutorForm.jsx
import { useState } from 'react';
import { useBiblioteca } from '../context/BibliotecaContext';

const SearchBookByAuthForm = () => {
  const [autor, setAutor] = useState('');
  const { state } = useBiblioteca();
  const [resultado, setResultado] = useState([]);

  const handleBuscarLibros = () => {
    const librosEncontrados = [];
    for (let [id, libro] of state.libros) {
      if (libro.autor === autor) {
        librosEncontrados.push({ id, ...libro });
      }
    }
    setResultado(librosEncontrados);
  };

  return (
    <div>
      <h2>Buscar Libros por Autor</h2>
      <input value={autor} onChange={(e) => setAutor(e.target.value)} placeholder="Autor" />
      <button onClick={handleBuscarLibros}>Buscar</button>
      <ul>
        {resultado.map(libro => (
          <li key={libro.id}>{libro.titulo} - {libro.autor}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBookByAuthForm;