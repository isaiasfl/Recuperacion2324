// src/components/PrestarLibroForm.jsx
import { useState } from 'react';
import { useBiblioteca } from '../context/BibliotecaContext';

const LendBookForm = () => {
    const [id, setId] = useState('');
    const [usuario, setUsuario] = useState('');
    const { dispatch } = useBiblioteca();

    const handlePrestarLibro = () => {
        dispatch({ type: 'PRESTAR_LIBRO', payload: { id, usuario } });
        setId('');
        setUsuario('');
    };

    return (
        <div>
        <h2>Prestar Libro</h2>
        <input value={id} onChange={(e) => setId(e.target.value)} placeholder="ID" />
        <input value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="Usuario" />
        <button onClick={handlePrestarLibro}>Prestar Libro</button>
        </div>
    );
};

export default LendBookForm;
