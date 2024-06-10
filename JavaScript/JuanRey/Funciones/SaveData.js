
// guardar array de objetos en el localstorage

function guardarArrayEnLocalStorage(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}

function obtenerArrayDeLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Ejemplo de uso
let arrayDeObjetos = [
    { id: 1, nombre: 'Objeto 1' },
    { id: 2, nombre: 'Objeto 2' }
];
guardarArrayEnLocalStorage('arrayDeObjetos', arrayDeObjetos);

let arrayRecuperado = obtenerArrayDeLocalStorage('arrayDeObjetos');
console.log(arrayRecuperado); // [{ id: 1, nombre: 'Objeto 1' }, { id: 2, nombre: 'Objeto 2' }]

// guardar un map en el localStorage

function guardarMapEnLocalStorage(key, map) {
    const obj = Object.fromEntries(map);
    localStorage.setItem(key, JSON.stringify(obj));
}

function obtenerMapDeLocalStorage(key) {
    const data = localStorage.getItem(key);
    const obj = data ? JSON.parse(data) : null;
    return obj ? new Map(Object.entries(obj)) : null;
}

// Ejemplo de uso
let map = new Map([
    ['a', 1],
    ['b', 2]
]);
guardarMapEnLocalStorage('miMap', map);

let mapRecuperado = obtenerMapDeLocalStorage('miMap');
console.log(mapRecuperado); // Map { 'a' => 1, 'b' => 2 }

// guardar un array de objetos en un .json

const fs = require('fs');

function guardarArrayEnArchivo(fileName, array) {
    const data = JSON.stringify(array, null, 2);
    fs.writeFileSync(fileName, data, 'utf8');
}

function obtenerArrayDeArchivo(fileName) {
    const data = fs.readFileSync(fileName, 'utf8');
    return JSON.parse(data);
}

// Ejemplo de uso
let arrayDeObjetos = [
    { id: 1, nombre: 'Objeto 1' },
    { id: 2, nombre: 'Objeto 2' }
];
guardarArrayEnArchivo('arrayDeObjetos.json', arrayDeObjetos);

let arrayRecuperado = obtenerArrayDeArchivo('arrayDeObjetos.json');
console.log(arrayRecuperado); // [{ id: 1, nombre: 'Objeto 1' }, { id: 2, nombre: 'Objeto 2' }]

// guardar un map en un .json

const fs = require('fs');

function guardarMapEnArchivo(fileName, map) {
    const obj = Object.fromEntries(map);
    const data = JSON.stringify(obj, null, 2);
    fs.writeFileSync(fileName, data, 'utf8');
}

function obtenerMapDeArchivo(fileName) {
    const data = fs.readFileSync(fileName, 'utf8');
    const obj = JSON.parse(data);
    return new Map(Object.entries(obj));
}

// Ejemplo de uso
let map = new Map([
    ['a', 1],
    ['b', 2]
]);
guardarMapEnArchivo('miMap.json', map);

let mapRecuperado = obtenerMapDeArchivo('miMap.json');
console.log(mapRecuperado); // Map { 'a' => 1, 'b' => 2 }

// guardarDatos.js

// Función para descargar un archivo
function descargarArchivo(nombreArchivo, contenido) {
    const a = document.createElement('a');
    const file = new Blob([contenido], { type: 'application/json' });
    a.href = URL.createObjectURL(file);
    a.download = nombreArchivo;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Guardar array de objetos en un archivo .json
function guardarArrayEnArchivo(array, nombreArchivo = 'arrayDeObjetos.json') {
    const data = JSON.stringify(array, null, 2);
    descargarArchivo(nombreArchivo, data);
}

// Guardar Map en un archivo .json
function guardarMapEnArchivo(map, nombreArchivo = 'miMap.json') {
    const obj = Object.fromEntries(map);
    const data = JSON.stringify(obj, null, 2);
    descargarArchivo(nombreArchivo, data);
}

export { guardarArrayEnArchivo, guardarMapEnArchivo };

// main.js
import { guardarArrayEnArchivo, guardarMapEnArchivo } from './guardarDatos';

// Ejemplo de uso con un array de objetos
const arrayDeObjetos = [
    { id: 1, nombre: 'Objeto 1' },
    { id: 2, nombre: 'Objeto 2' }
];
document.getElementById('guardarArrayBtn').addEventListener('click', () => {
    guardarArrayEnArchivo(arrayDeObjetos);
});

// Ejemplo de uso con un Map
const map = new Map([
    ['a', 1],
    ['b', 2]
]);
document.getElementById('guardarMapBtn').addEventListener('click', () => {
    guardarMapEnArchivo(map);
});
