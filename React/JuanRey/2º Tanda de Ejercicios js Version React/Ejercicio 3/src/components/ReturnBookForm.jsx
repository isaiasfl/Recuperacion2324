// src/components/DevolverLibroForm.jsx
import { useState } from 'react';
import { useBiblioteca } from '../context/BibliotecaContext';

const ReturnBookForm = () => {
    const [id, setId] = useState('');
    const [usuario, setUsuario] = useState('');
    const { dispatch } = useBiblioteca();

    const handleDevolverLibro = () => {
        dispatch({ type: 'DEVOLVER_LIBRO', payload: { id, usuario } });
        setId('');
        setUsuario('');
    };

    return (
        <div>
        <h2>Devolver Libro</h2>
        <input value={id} onChange={(e) => setId(e.target.value)} placeholder="ID" />
        <input value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="Usuario" />
        <button onClick={handleDevolverLibro}>Devolver Libro</button>
        </div>
    );
};

export default ReturnBookForm;