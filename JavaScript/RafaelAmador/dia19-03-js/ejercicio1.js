//Ejercicio 1
const array= ["Hola", "Perro", "Animal", "Planeta", "Hola", "Animal"]

const quitarDuplicados = (letra) =>{
    const datos = new Set(array);
    const arraySinDuplicados= [...datos];

    if(letra){
        if (letra.toUpperCase() === "R"){
            arraySinDuplicados.sort((a, b) => b.length - a.length);
        }else{
            arraySinDuplicados.sort((a, b) => a.length - b.length);
        }
    }else{
        arraySinDuplicados.sort((a, b) => a.length - b.length);
    }

    return arraySinDuplicados
}

console.log(quitarDuplicados());
console.log(quitarDuplicados("r"));