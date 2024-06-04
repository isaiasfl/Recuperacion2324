function ordenarPorPropiedad(array, propiedad) {
    if (!Array.isArray(array) || array.length === 0 || typeof propiedad !== 'string') return [];

    return array.slice().sort((a, b) => {
        if (typeof a[propiedad] === 'string' && typeof b[propiedad] === 'string') {
            return a[propiedad].localeCompare(b[propiedad]);
        } else if (typeof a[propiedad] === 'number' && typeof b[propiedad] === 'number') {
            return b[propiedad] - a[propiedad];
        } else {
            return 0; // No se puede comparar, mantener el orden original
        }
    });
}

// Ejemplo de uso
const frutas = [
    { id: 1, nombre: "Manzana", precio: 4 },
    { id: 2, nombre: "Platano", precio: 3 },
    { id: 3, nombre: "Fresas", precio: 10 },
    { id: 4, nombre: "Naranja", precio: 4 }
];
const arrayOrdenadoPorNombre = ordenarPorPropiedad(frutas, 'nombre');
const arrayOrdenadoPorPrecio = ordenarPorPropiedad(frutas, 'precio');
console.log(arrayOrdenadoPorNombre);
console.log(arrayOrdenadoPorPrecio);
