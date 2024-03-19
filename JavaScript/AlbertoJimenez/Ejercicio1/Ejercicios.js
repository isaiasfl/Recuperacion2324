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


// ## Ejercicio 2
// Si añadimos como 2 parametro la letra r mayusc o min me devolvera el array con las palabras ordenadas de mayor
//  longitud a menor longitud y si no escribo r o cualquier cosa diferente me las devolvera de mayor a menor.

const arrayOrdenado = (array, r)=>{
    r = r.toLowerCase();
    let arrayOrd = [];

    if (r === "r"){
        arrayOrd = array.sort((a,b)=>{
            return b.length - a.length;
        })
    }else{
        arrayOrd = array.sort((a,b)=>{
            return a.length - b.length;
        })

    }

    return arrayOrd;
}
console.log("Ejercicio 2");
console.log(arrayOrdenado(array, "g"));

// # Ejercicio 3
// Escribe una funcion que cuente la frecuencia con la que una palabra aparece en una oracion devolviendo un map
//  donde las claves del map son las palabras encontradas
//  y los valores son el numero de veces que aparece dicha palabra 

const frecuenciaPalabras = ()=>{
    const map = {};
}

console.log("Ejercicio 3");

