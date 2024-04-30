// ## Ejercicio 1
//Crear una funcion llamada filtrar primos que tome un array como argumento y me devuelva un nuevo array solo con los numeros primos "Sin Repeticion". Como text le pasara un array que tengo texto y numero.

function esPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    return true;
}


function filtrarPrimos(arr) {
    const numerosPrimos = [];
    const numerosVistos = {};
    for (let i = 0; i < arr.length; i++) {
        if (!numerosVistos[arr[i]] && !isNaN(arr[i]) && esPrimo(arr[i])) {
            numerosPrimos.push(arr[i]);
            numerosVistos[arr[i]] = true;
        }
    }
    return numerosPrimos;
}

const arrayOriginal = [10, 5, 7, 3, "prueba", 2, 5, "prueba2", 7, 11, 13];
const numerosPrimosSinRepeticion = filtrarPrimos(arrayOriginal);
console.log(numerosPrimosSinRepeticion); 
