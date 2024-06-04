
const array = ["queso","casa","hola","granada","queso"];

export function ordenar(array, orden) {
    let resultadoOrdenado = [...new Set(array)]

    if(orden === "r" || orden === "R") {
        return resultadoOrdenado.sort((a,b)=> b.length - a.length);
    } else {
        return resultadoOrdenado.sort((a,b)=> a.length - b.length);
    }

    return resultadoOrdenado;
}

console.log(ordenar(array));
console.log(ordenar(array,"r"));