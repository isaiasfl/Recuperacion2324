// ## Ejercicio 1
// Dado un array de palabras crea una funcion que tome como entrada un array u me devuelva dicho array sin duplicados.

const arraySinDuplicados = (array) =>{
    const arraySinDuplicados = [];
for(let i in array){
    if(arraySinDuplicados.includes(array[i]) == false){ 
        arraySinDuplicados.push(array[i]);
}}

    return arraySinDuplicados;

};
const array = ["Zarigüeya", "Gato", "Perro", "Conejo", "Hamster", "Conejo", "Perro", "Avestruz"];
console.log("Ejercicio 1");
console.log(arraySinDuplicados(array));




