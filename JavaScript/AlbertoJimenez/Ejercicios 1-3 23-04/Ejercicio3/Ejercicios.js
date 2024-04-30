// # Ejercicio 3
// Crear una funcion llamada ordenar por propiedad que tome por
//  argumento un arrat de objetos y como segundo argumento el
//   nommbre de una propiedad y me devuelva un array con los datos de esa propiedad ordenados.
//    Si es texto alfabeticamente y si es numero de mayor a menor


function ordenarPorPropiedad(arr, propiedad) {

    const tipoDato = typeof arr[0][propiedad];

    const copiaArr = arr.slice();

    copiaArr.sort((a, b) => {
        if (tipoDato === "number") {
            return b[propiedad] - a[propiedad]; 
        } else {
            return a[propiedad].localeCompare(b[propiedad]);
        }
    });

  
    return copiaArr.map(objeto => objeto[propiedad]);
}


const personas = [
    { nombre: "Alberto", edad: 21 },
    { nombre: "Samu", edad: 21 },
    { nombre: "Juan", edad: 25 },
    { nombre: "Isaias", edad: 25 }
];

const nombresOrdenados = ordenarPorPropiedad(personas, "nombre");
console.log("Nombres ordenados:", nombresOrdenados);

const edadesOrdenadas = ordenarPorPropiedad(personas, "edad");
console.log("Edades ordenadas:", edadesOrdenadas);
