// Ejercicio 2

// Escribe una funcion que me cuente el numero de veces que aparece una palabra en una oración. Devolviendo un map, 
// donde las claves del map es la palabra 
// y el valor de la clave sera el numero de veces que aparece la palabra.

function mapeoFrases(frase){
    var newFrase = frase.replace(/,/g, "").split(" ");
    const mapeo = new Map();
    newFrase.forEach(palabra => {
        const palabraMinus = palabra.toLowerCase();
        if(!mapeo.has(palabraMinus)){
            mapeo.set(palabraMinus,1);
        }else{
            var count = mapeo.get(palabraMinus);
            mapeo.set(palabraMinus,count+1);
        }
    });
    return mapeo;
}

