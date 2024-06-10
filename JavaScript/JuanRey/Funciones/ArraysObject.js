
//filtrar un array de objetos

function filtrarArray(arr, callback) {
    return arr.filter(callback);
}

let arr = [
    { id: 1, nombre: 'Objeto 1' },
    { id: 2, nombre: 'Objeto 2' },
    { id: 3, nombre: 'Objeto 3' }
];

let arrFiltrado = filtrarArray(arr, obj => obj.id > 1);
console.log(arrFiltrado);  // [{ id: 2, nombre: 'Objeto 2' }, { id: 3, nombre: 'Objeto 3' }]


// añadir elementos a un array de objetos

function addElementoArray(arr, elemento) {
    arr.push(elemento);
}

addElementoArray(arr, { id: 4, nombre: 'Objeto 4' });
console.log(arr);  // [{ id: 1, nombre: 'Objeto 1' }, { id: 2, nombre: 'Objeto 2' }, { id: 3, nombre: 'Objeto 3' }, { id: 4, nombre: 'Objeto 4' }]


// borrar elemetos a un array de objetos

function borrarElementoArray(arr, callback) {
    let index = arr.findIndex(callback);
    if (index !== -1) {
        arr.splice(index, 1);
    }
}

borrarElementoArray(arr, obj => obj.id === 1);
console.log(arr);  // [{ id: 2, nombre: 'Objeto 2' }, { id: 3, nombre: 'Objeto 3' }, { id: 4, nombre: 'Objeto 4' }]

// buscar elementos en un array de objetos

function buscarElementoArray(arr, callback) {
    return arr.find(callback);
}

let elementoArray = buscarElementoArray(arr, obj => obj.id === 3);
console.log(elementoArray);  // { id: 3, nombre: 'Objeto 3' }
