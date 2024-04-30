// ## Ejercicio 2
// Calcular una funcion llamada numero mas frecuente que le pasemos un array de numeros
//"Deben ser obligatoriamente numeros" y me devuelva que numero se repite mas.  

function numeroMasFrecuente(arr) {

    const frecuencias = {};
    let numeroMasFrecuente = arr[0];
    let maxFrecuencia = 1;

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        frecuencias[num] = (frecuencias[num] || 0) + 1;
        if (frecuencias[num] > maxFrecuencia) {
            numeroMasFrecuente = num;
            maxFrecuencia = frecuencias[num];
        }
    }

    return numeroMasFrecuente;
}

const arrayNumeros = [2, 3, 4, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7];
const numeroFrecuente = numeroMasFrecuente(arrayNumeros);
console.log("El número más frecuente es:", numeroFrecuente);
