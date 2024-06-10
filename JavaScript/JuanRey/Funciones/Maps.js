// filtrar un map
function filtrarMap(map, callback) {
    let nuevoMap = new Map();
    for (let [key, value] of map) {
        if (callback(key, value)) {
            nuevoMap.set(key, value);
        }
    }
    return nuevoMap;
}

let map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

let mapFiltrado = filtrarMap(map, (key, value) => value > 1);
console.log(mapFiltrado);  // Map { 'b' => 2, 'c' => 3 }

// Añadir elementos a un map

function addElementoMap(map, key, value) {
    map.set(key, value);
}

addElementoMap(map, 'd', 4);
console.log(map);  // Map { 'a' => 1, 'b' => 2, 'c' => 3, 'd' => 4 }

//borrar elementos a un map

function borrarElementoMap(map, key) {
    map.delete(key);
}

borrarElementoMap(map, 'a');
console.log(map);  // Map { 'b' => 2, 'c' => 3, 'd' => 4 }

//buscar elementos a un map

function buscarElementoMap(map, callback) {
    for (let [key, value] of map) {
        if (callback(key, value)) {
            return { key: key, value: value };
        }
    }
    return null;
}

let elementoMap = buscarElementoMap(map, (key, value) => value === 3);
console.log(elementoMap);  // { key: 'c', value: 3 }


