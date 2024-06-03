/**
 * Dado un array de palabras, crear una función que tome como entrada un array y me devuelva dicho array sin duplicados.
 * Si añadimos como segundo parámetro de la funcion una r o R devolverá el array de las palabras ordenada de mayor o menor longitud.
 * @param {Array} myArray
 * @param {String} orden
 * @returns
 */

function ejercicio1(myArray, orden) {
  const mySet = new Set(myArray);
  const arraySinDouble = Array.from(mySet);
  //   const arraySinDouble = [...mySet]; // dos formas de volverlo a convertir a array

  if (orden === "r" || orden === "R") {
    arraySinDouble.sort((a, b) => b.length - a.length);
  } else if (orden) {
    console.log("El segundo parámetro solo puede ser 'r' o 'R' para ordenar.");
  }

  return arraySinDouble;
}

// Ejemplo de uso
myArray = ["a", "b", "aaa", "bl", "a", "hola", "c", "c"];
ejercicio1(myArray);
ejercicio1(myArray, "r");
