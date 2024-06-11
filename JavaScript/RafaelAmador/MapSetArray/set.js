let miSet = new Set();

// Añadir elementos al Set
miSet.add("coche");
miSet.add("moto");
miSet.add("camion");

// Añadir un elemento duplicado (no se añadirá)
miSet.add("camion");

// Verificar el tamaño del Set
console.log(miSet.size); // 3

// Comprobar si un elemento existe en el Set
console.log(miSet.has("coche")); 
console.log(miSet.has("motora")); 

// Eliminar un elemento del Set
miSet.delete("coche");
console.log(miSet.has(2)); // false

// Iterar sobre los elementos del Set
miSet.forEach(elemento => {
  console.log(elemento);
});

// Convertir el Set a un array
let arrayDesdeSet = Array.from(miSet);
console.log(arrayDesdeSet); // [1, 3]

// Limpiar el Set
miSet.clear();
console.log(miSet.size); // 0

// Convertir el Set en un Map
let miMap = new Map();

miSet.forEach(elemento, index => {
  // Aquí podrías asignar un valor específico a cada clave del Map
  miMap.set(index, elemento);
});
