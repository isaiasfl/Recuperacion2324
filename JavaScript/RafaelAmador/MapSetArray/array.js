let datos = [
    { id: 1, nombre: "Objeto 1", valor: 10 },
    { id: 2, nombre: "Objeto 2", valor: 20 },
    { id: 3, nombre: "Objeto 3", valor: 30 },
    { id: 3, nombre: "Objeto 3", valor: 30 }
];

// Acceder a los elementos de la estructura de datos
console.log(datos[0].nombre); // Salida: "Objeto 1"
console.log(datos[1].valor);  // Salida: 20

// Agregar un nuevo objeto
datos.push({ id: 4, nombre: "Objeto 4", valor: 40 });

// Iterar sobre la estructura de datos
datos.map(objeto => (
    console.log(`ID: ${objeto.id}, Nombre: ${objeto.nombre}, Valor: ${objeto.valor}`)
));

// Función para eliminar un objeto por su ID
function eliminarObjetoPorID(id) {
    // Buscar el índice del objeto con el ID dado
    const indice = datos.findIndex(objeto => objeto.id === id);
    
    // Si se encuentra el objeto, eliminarlo del array
    if (indice !== -1) {
        datos.splice(indice, 1);
        console.log(`Objeto con ID ${id} eliminado.`);
    } else {
        console.log(`No se encontró ningún objeto con ID ${id}.`);
    }
}

// Eliminar el objeto con ID 2
eliminarObjetoPorID(2);

// pasar a un Set
let conjuntoDeDatos = new Set(datos);

// pasar a array
let array = Array.from(conjuntoDeDatos)

// pasar a Map
let mapaDeDatos = new Map();

// Iterar sobre el array y agregar cada objeto como un par clave-valor al Map
datos.forEach(objeto => {
    mapaDeDatos.set(objeto.id, objeto);
});