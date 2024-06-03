/**
 * Crear una función llamada filtrar primos que tome un array como argumento y me devuelva un nuevo array sólo con los
 * número primos (sin repetir)´. Comom test le pasaré un array con texto y números.
 */

function filtrarPrimos(numbers) {
  const primos = [];

  const esPrimo = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (
      typeof numbers[i] === "number" &&
      esPrimo(numbers[i]) &&
      !primos.includes(numbers[i])
    ) {
      primos.push(numbers[i]);
    }
  }

  return primos;
}

// Prueba

const a = [1, 2, 3, 4, 5, 6, 7, 11, 22, 345, 2357, "t", "r", 34, 456, "we"];
