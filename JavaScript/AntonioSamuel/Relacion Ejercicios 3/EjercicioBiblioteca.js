// Ejercicio 3: Sistema de Biblioteca

// Implementa un sistema de biblioteca que incluya las siguientes funcionalidades:

// 1. Añadir un nuevo libro.
// 2. Prestar un libro a un usuario.
// 3. Devolver un libro.
// 4. Buscar libros por autor.
// 5. Obtener todos los libros prestados.


// 1. Añadir un nuevo libro.
const addBook = (map, id, title, author, anio, prestado = false) => {
    if (map.has(id)) {
        throw new Error("El libro ya existe")
    }
    map.set(id, {title, author, anio, prestado})
}

// 2. Prestar un libro a un usuario.
const prestarLibro = (map, id) => {
    if (map.has(id)) {
        const libro = map.get(id)
        libro.prestado = true;
        map.set(id, libro)
    }
}

// 3. Devolver un libro.
const devolverLibro = (map, id) => {
    if (map.has(id)) {
        const libro = map.get(id)
        if (libro.prestado === true) {
            libro.prestado = false
            map.set(id, libro)
        }
    }
}

// 4. Buscar libros por autor.
const buscarLibroPorAutor = (map, autor) => {
    const busqueda = []
    map.forEach(libro => {
        if (libro.author === autor) {
            busqueda.push(libro)
        }
    });
    return busqueda
}

// 5. Obtener todos los libros prestados.
const obtenerLibrosPrestados = (map) => {
    const busqueda = []
    map.forEach(libro =>{
        if (libro.prestado === true) {
            busqueda.push(libro)
        }
    })
    return busqueda
}


// -----------| PRUEBAS |-------------
const biblioteca = new Map();

console.log('----- AÑADIR -----')
addBook(biblioteca, 1, 'Cien años de soledad', 'Gabriel García Márquez', '1967')
addBook(biblioteca, 2, 'El amor en los tiempos del cólera', 'Gabriel García Márquez', '1985')
addBook(biblioteca, 3, '1984', 'George Orwell', '1949')
addBook(biblioteca, 4, 'Matar a un ruiseñor', 'Harper Lee', '1960')
console.log(biblioteca)

console.log('----- PRESTAR -----')
prestarLibro(biblioteca, 3)
console.log(biblioteca)

console.log('----- DEVOLVER -----')
devolverLibro(biblioteca, 3)
console.log(biblioteca)

console.log('----- BUSCAR POR AUTOR -----')
console.log(buscarLibroPorAutor(biblioteca, 'Gabriel García Márquez'))

console.log('----- PRESTAMOS -----')
console.log(obtenerLibrosPrestados(biblioteca))
