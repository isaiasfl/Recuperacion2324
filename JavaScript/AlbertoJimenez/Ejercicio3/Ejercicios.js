// # Ejercicio 3
// Escribe una funcion que cuente la frecuencia con la que una palabra aparece en una oracion devolviendo un map
//  donde las claves del map son las palabras encontradas
//  y los valores son el numero de veces que aparece dicha palabra 

const frecuenciaPalabras = (frase)=>{
    const map = new Map();
    let fraseDividida = frase.split(" ");

    for (let i of fraseDividida){
        map.set(i, map.get(i) +1 || 1);
    }
    console.log(map);
}



const frase = "Es un ejemplo del ejercicio 3 del del un";
console.log(frecuenciaPalabras(frase));
console.log("Ejercicio 3");

