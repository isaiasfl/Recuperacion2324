/**
 * @author: Samuel Molina
 */

function arraySinDuplicados(array, r) {

    const sinDuplicados = new Set(array);
    const arraySin = [...sinDuplicados];

    if (r === 'r' || r === 'R') {    
        const arrayMayorMenor = arraySin.sort((a, b) => b.length - a.length);

        return arrayMayorMenor;
    }
    else{
        const arrayMenorMayor = arraySin.sort((a, b) => a.length - b.length);

        return arrayMenorMayor;
    }

}

const miArray = ['hola', 'hola', 'ejemplo', 'de', 'array', 'array'];

console.log(miArray);
console.log(arraySinDuplicados(miArray, "r"));