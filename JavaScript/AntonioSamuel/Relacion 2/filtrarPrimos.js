/**
 * @author: Samuel Molina
 */

function esPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function filtrarPrimos(array) {
    const numerosPrimos = [];
    array.forEach(elemento => {
        if (typeof elemento === 'number' && esPrimo(elemento) && !numerosPrimos.includes(elemento)) {
            numerosPrimos.push(elemento);
        }
    });

    return numerosPrimos;
}

const arrayTest = ['texto', 1, 2, 3, 4, 5, 'a', 6, 7, 7, 8, 9, 'b', 10, 11, 12, 13, 13];
console.log(filtrarPrimos(arrayTest))

