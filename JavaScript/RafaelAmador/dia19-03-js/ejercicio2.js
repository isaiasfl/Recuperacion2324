//Ejercicio 2
const contarPalabras = (frase) =>{
    const repetidas = new Map();
    const fraseSinPuntuacion = frase.replace(/[,.+-?¿!¿]/g, " ");    
    const fraseMayus =fraseSinPuntuacion.toUpperCase()
    const palabrasFrase = fraseMayus.split(/\s+/).filter(palabra => palabra.trim() !== "");
    palabrasFrase.forEach(palabra => {
        if(repetidas.has(palabra)){
            repetidas.set(palabra, repetidas.get(palabra) + 1);
        }else {
            repetidas.set(palabra, 1);
        }
    });
    return repetidas
}
console.log(contarPalabras("Hola hola buenos dias"));
console.log(contarPalabras("Hola,  hola buenos. dias!!"));