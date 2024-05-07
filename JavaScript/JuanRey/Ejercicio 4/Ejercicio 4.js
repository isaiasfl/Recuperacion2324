function numeroMasFrecuente(array) {
    if (!Array.isArray(array) || array.length === 0) return null;

    const contador = {};
    let maxFrecuencia = 0;
    let numMasFrecuente = null;

    for (const num of array) {
        contador[num] = (contador[num] || 0) + 1;
        if (contador[num] > maxFrecuencia) {
            maxFrecuencia = contador[num];
            numMasFrecuente = num;
        }
    }

    return numMasFrecuente;
}

// Ejemplo de uso
const arrayNumeros = [1, 2, 3, 4, 5, 1, 2, 2, 3, 3, 3];
const numeroFrecuente = numeroMasFrecuente(arrayNumeros);
console.log(numeroFrecuente); // Output: 3
