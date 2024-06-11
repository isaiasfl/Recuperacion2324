const estudiantes = new Map()

estudiantes.set(1, { nombre: "Juan Pérez", calificaciones: [90, 85, 88] });
estudiantes.set(2, { nombre: "María López", calificaciones: [92, 80, 75] });
estudiantes.set(3, { nombre: "Carlos García", calificaciones: [85, 89, 90] });
estudiantes.set("jjj", { nombre: "Carlos García", calificaciones: [85, 89, 90] });
//obtener 1 dato
let estudiante = estudiantes.get(1);
console.log(estudiante);

// obtener las keys
for (let key of estudiantes.keys()) {
    console.log(key); 
}

//obtener las claves
for (let valor of estudiantes.values()) {
    console.log(valor); 
}


// Obtener el tamaño del Map
console.log(estudiantes.size);


//borrar entradas por clave
estudiantes.delete("jjj");
// se borraria este => estudiantes.set("jjj", { nombre: "Carlos García", calificaciones: [85, 89, 90] });


//recorrer map
for (let [id, datos] of estudiantes) {
    console.log(`ID: ${id}, Nombre: ${datos.nombre}, Calificaciones: ${datos.calificaciones}`);
}
//limpiar Map
estudiantes.clear();

//Convertir en array
let arrayEstudiantes = Array.from(estudiantes, ([id, datos]) => ({ id, ...datos }));
let arrayEstudiantes2 = [...datos]
// Pasar los valores del Map a Set
let valoresSet = new Set(estudiantes.values());

// Pasar las claves de Map a Set
let paresSet = new Set(estudiantes.entries());