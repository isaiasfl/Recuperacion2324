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