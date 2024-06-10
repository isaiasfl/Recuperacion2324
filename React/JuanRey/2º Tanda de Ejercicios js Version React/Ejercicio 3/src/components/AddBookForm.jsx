import { useState } from 'react';
import { useBiblioteca } from '../context/BibliotecaContext';

const AddBookForm = () => {
    const { addBook } = useBiblioteca();
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Date.now();
        addBook(id, titulo, autor);
        setTitulo('');
        setAutor('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>Título:</label>
            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div>
            <label>Autor:</label>
            <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} />
        </div>
        <button type="submit">Añadir Libro</button>
        </form>
    );
};

export default AddBookForm;