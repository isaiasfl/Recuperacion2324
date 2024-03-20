//Ejercicio 1

// Dado un array de palabras, crear una funcion que tome como entrada un array y me devuelva dicho array sin duplicados.
// Si añadimos como segundo parametro de la funcion una R o r, devolvera el array de las palabras ordenadas de mayor a menor 
// longitud o a la inversa

function arraysOrdenados(array , orden = 0) {
    const setFinal = new Set(array);
    const arrayFinal = [...setFinal];
    if(orden === 'R' || orden === 'r'){
        arrayFinal.sort();
    }else{
        arrayFinal.sort();
        arrayFinal.reverse();
    }
    return arrayFinal;
}

const prueba1 = [1, 3, 2, 3, 5, 4, 8, 7];
const prueba2 = ['a', 'c', 'a', 'd', 'd', 'c', 'b', 'b'];
const prueba3 = [1, 'a', 'g', 1, 4, 'g', 4, 7];
const prueba4 = ['aaa', 'a1', 3, 3, 1, 'c', 7, 'b'];

console.log(arrays(prueba1));
console.log(arrays(prueba2));
console.log(arrays(prueba3));
console.log(arrays(prueba4));

