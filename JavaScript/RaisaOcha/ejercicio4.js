/**
 * Calcular la función llamada filtrar número mñas frecuente que le pasemos un array de numero (obligatoriamente)
 * y me devuelva que número se repite más.
 */

function filtrarNumeroMasFrecuente(numbers) {
  let frecuencia = [];

  for (let number of numbers) {
    if (typeof number === "number") {
      frecuencia[number] = (frecuencia[number] || 0) + 1;
    }
  }
  console.log(frecuencia);

  let numeroMasFrecuente;
  let maxFrecuencia = 0;

  for (let numero in frecuencia) {
    if (frecuencia[numero] > maxFrecuencia) {
      maxFrecuencia = frecuencia[numero];
      numeroMasFrecuente = numero;
    }
  }

  return parseInt(numeroMasFrecuente);
}

// Prueba
const arrayNumeros = [1, 2, 3, 4, 4, 4, 5, 5, 5, 5];
