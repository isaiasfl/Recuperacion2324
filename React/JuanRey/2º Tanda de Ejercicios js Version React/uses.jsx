import React, { useState } from 'react';
import { generateId, generateDni, generateMatricula, saveToLocalStorage, saveToDbJson } from './functions'; // Asegúrate de ajustar la ruta a la ubicación correcta del archivo utils

const App = () => {
    const [data, setData] = useState({
        id: '',
        dni: '',
        matricula: ''
    });

    const handleGenerate = () => {
        const id = generateId();
        const dni = generateDni();
        const matricula = generateMatricula();

        const newData = { id, dni, matricula };

        setData(newData);

        // Guardar en localStorage
        saveToLocalStorage('userData', newData);

        // Guardar en db.json
        saveToDbJson(newData).then(response => {
            console.log('Datos guardados en db.json:', response);
        }).catch(error => {
            console.error('Error al guardar en db.json:', error);
        });
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Generador de Datos</h1>
            <button onClick={handleGenerate} className="bg-blue-500 text-white px-4 py-2 rounded">Generar Datos</button>
            <div className="mt-4">
                <p>ID: {data.id}</p>
                <p>DNI: {data.dni}</p>
                <p>Matrícula: {data.matricula}</p>
            </div>
        </div>
    );
};

export default App;

export const generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};

export const generateDni = () => {
    const num = Math.floor(Math.random() * 100000000);
    const chars = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const letter = chars[num % 23];
    return `${num}${letter}`;
};

export const generateMatricula = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetters = Array.from({ length: 3 }, () => letters.charAt(Math.floor(Math.random() * letters.length))).join('');
    const randomNumbers = Math.floor(1000 + Math.random() * 9000);
    return `${randomNumbers}${randomLetters}`;
};

export const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const saveToDbJson = async (data) => {
    try {
        const response = await fetch('http://localhost:4000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error('Error al guardar los datos en db.json');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
