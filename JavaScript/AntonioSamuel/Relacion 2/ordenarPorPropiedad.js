/**
 * @author: Samuel Molina
 */

function ordenarPorPropiedad(array, propiedad) {
    // Comprobar si la propiedad es un numero
    const esNumerica = typeof array[0][propiedad] === 'number';

    // Ordenar el array de objetos por la propiedad
    array.sort((a, b) => {
        if (esNumerica) {
            return b[propiedad] - a[propiedad]; // Orden descendente para números
        } else {
            return a[propiedad].localeCompare(b[propiedad]); // Orden alfabético para texto
        }
    });

    // Obtener el array con los datos de la propiedad ordenados
    const datosOrdenados = array.map(objeto => objeto[propiedad]);

    return datosOrdenados;
}

const personas = [
    {nombre: 'Juan', edad: 30},
    {nombre: 'Ana', edad: 25},
    {nombre: 'Pedro', edad: 40},
    {nombre: 'Raul', edad: 18},
    {nombre: 'Miguel', edad: 55}
];

console.log(ordenarPorPropiedad(personas, 'nombre'));
console.log(ordenarPorPropiedad(personas, 'edad'));
