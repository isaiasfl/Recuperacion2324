/**
 * Escribe una función que me cuente el numero de veces que aparece una palabara en una oración, devolviendo un map donde las claves
 * del map es la palabra y el valor el numero de veces que aparece la palabra.
 * @param {String} miCadena
 * @returns
 */
function ejercicio2(miCadena) {
  const arrayOfStrings = miCadena.replace(/,/g, "").split(" ");
  const myMap = new Map();

  arrayOfStrings.forEach((palabra) => {
    if (myMap.has(palabra)) {
      myMap.set(palabra, myMap.get(palabra) + 1);
    } else {
      myMap.set(palabra, 1);
    }
  });

  return myMap;
}
