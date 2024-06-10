// src/components/ObtenerLibrosPrestados.jsx
import { useBiblioteca } from '../context/BibliotecaContext';

const SearchLendedBooksForm = () => {
    const { state } = useBiblioteca();

    const librosPrestados = [];
    for (let [id, libro] of state.libros) {
        if (libro.prestado) {
        librosPrestados.push({ id, ...libro });
        }
    }

    return (
        <div>
        <h2>Obtener Libros Prestados</h2>
        <ul>
            {librosPrestados.map(libro => (
            <li key={libro.id}>{libro.titulo} - {libro.autor}</li>
            ))}
        </ul>
        </div>
    );
};

export default SearchLendedBooksForm;