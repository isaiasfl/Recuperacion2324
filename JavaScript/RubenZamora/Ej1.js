/**
    Dado un array de palabras crea una funcion que tome como entrada un array 
    y me devuelva dicho array sin duplicados.
    Si añadimos como segundo parametro 
    la letra R me devolvera el array con las palabras ordenadas de mayor longitud a menor, 
    si no escribo R o cualquier otra cosa me las devolvera de menor a mayor.
 */

const arrayPalabras = ['manzana', 'pera', 'naranja', 'banana', 'uva', 'manzana'];

function eliminarDuplicado(array, orden = 'asc'){
    let set = new Set(array);
    let arraySin = Array.from(set);
    if(orden=='R'){
        arraySin.sort((a, b) => b.length - a.length);
    }else{
        arraySin.sort((a, b) => a.length - b.length);
    }
    console.log(arraySin);
}

eliminarDuplicado(arrayPalabras, 'R');


