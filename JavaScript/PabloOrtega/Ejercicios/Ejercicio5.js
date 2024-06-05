// Ejercicio 5

// Crear una funcion llamada crearPorPropiedad que tome como primer argumento un array de objetos y como segundo el nombre 
// de una propiedad y me devuelva un array con los datos de esa propiedad ordenados. Si es texto alfabeticamente 
// y si es numero de mayor a menor

function crearPorPropiedad(array, prop) {

    const esNumerica = typeof array[0][prop] === 'number';
    var arr = [];

    if (esNumerica) {
        arr = array.slice().sort((a, b) => b[prop] - a[prop]);
        return arr
    } else {
        arr = array.slice().sort((a, b) => a[prop].localeCompare(b[prop]));
        return arr
    }
}

const prueba = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 25 },
    { nombre: 'Pedro', edad: 35 },
    { nombre: 'Lucas', edad: 19 }
];
