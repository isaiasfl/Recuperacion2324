/**
 * @author: Samuel Molina
 */

function numeroMasFrecuente(array) {
    let frecuencia = {};

    array.forEach(numero => {
        if (frecuencia[numero]) {
            frecuencia[numero]++;
        } else {
            frecuencia[numero] = 1;
        }
    });

    let numeroMasFrecuente;
    let maxFrecuencia = 0;
    for (let numero in frecuencia) {
        if (frecuencia[numero] > maxFrecuencia) {
            maxFrecuencia = frecuencia[numero];
            numeroMasFrecuente = numero;
        }
    }

    return numeroMasFrecuente;
}

const arrayTest = [1, 2, 3, 4, 5, 2, 3, 2, 4, 2, 2, 4, 4, 1, 3, 3, 2, 4];
console.log(numeroMasFrecuente(arrayTest));