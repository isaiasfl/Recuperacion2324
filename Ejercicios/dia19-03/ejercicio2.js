const contarPalabras = (frase) =>{
    const repetidas = new Map();
    const fraseMayus =frase.toUpperCase()
    const palbrasFrase= fraseMayus.split(" ");
    palbrasFrase.forEach(palabra => {
        if(repetidas.has(palabra)){
            repetidas.set(palabra, repetidas.get(palabra) + 1);
        }else {
            repetidas.set(palabra, 1);
        }
    });
    return repetidas
}
console.log(contarPalabras("Hola hola buenos dias"));
console.log(contarPalabras("Hola  hola buenos dias"));