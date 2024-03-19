/**
    Escribe una funcion que cuente la frecuencia que una palabra aparece en una oracion, 
    devolviendo un map donde las claves del map son las palabras encontradas
    y los valores el numero de veces que aparece
 */

let texto = 'La manzana es una fruta, la pera también es una fruta.';

function contarFrecuencia(oracion){
    const palabras = oracion.toLowerCase().match(/\b\w+\b/g);
    const frecuencia = new Map();
    palabras.forEach(palabra => frecuencia.set(palabra, frecuencia.get(palabra) ? frecuencia.get(palabra) + 1 : 1));
    console.log(frecuencia);
}

contarFrecuencia(texto);
