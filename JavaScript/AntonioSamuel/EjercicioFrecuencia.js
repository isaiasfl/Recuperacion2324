/**
 * @author: Samuel Molina
 */

function frecuenciaPalabras(frase) {
    
    const palabras = frase.split(/[ ,]+/);

    const miMap = new Map();

    palabras.forEach(palabra => {
        if (miMap.has(palabra)) {
            miMap.palabra += 1;
        }
        else{
            miMap.palabra = 1
        }
    });

    return miMap;
}

oracion = "Hola, me llamo Ejemplo y me voy a dedicar a Javascript";

console.log(oracion);
console.log(frecuenciaPalabras(oracion));