/**
    Dado un array de palabras crea una funcion que tome como entrada un array 
    y me devuelva dicho array sin duplicados.
    Si añadimos como segundo parametro 
    la letra R me devolvera el array con las palabras ordenadas de mayor longitud a menor, 
    si no escribo R o cualquier otra cosa me las devolvera de menor a mayor.

    Escribe una funcion que cuente la frecuencia que una palabra aparece en una oracion, 
    devolviendo un map donde las claves del map son las palabras encontradas
    y los valores el numero de veces que aparece
*/

const arrayPalabras = ['manzana', 'pera', 'naranja', 'banana', 'uva', 'manzana'];

function eliminarDuplicado(array, orden){
    const set = new Set(array);
    if(orden=='R'){
        
    }
    console.log(set);
}

eliminarDuplicado(arrayPalabras);


