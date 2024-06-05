/**
 * Ejercicio 3: Sistema de Biblioteca
    Implementa un sistema de biblioteca que incluya las siguientes funcionalidades:

    Añadir un nuevo libro.
    Prestar un libro a un usuario.
    Devolver un libro.
    Buscar libros por autor.
    Obtener todos los libros prestados.
 */

class Biblioteca {

    constructor() {
        this.libros = new Map();
        this.prestamos = new Map();
    }

    añadirLibro(id, titulo, autor) {
        if (this.libros.has(id)) {
            console.log(`El libro ya existe.`);
            return;
        }
        this.libros.set(id, { titulo, autor, prestado: false });
        console.log(`Libro "${titulo}" agregado.`);
    }

    prestarLibro(id, usuario) {
        if (!this.libros.has(id)) {
            console.log(`Este libro no existe en nuestra biblioteca.`);
            return;
        }
        let libro = this.libros.get(id);
        if (libro.prestado) {
            console.log(`Este libro ha sido prestado.`);
            return;
        }
        libro.prestado = true;
        this.libros.set(id, libro);
        this.prestamos.set(id, usuario);
        console.log(`Libro "${libro}" prestado al usuario "${usuario}.`);
    }

    devolverLibro(id) {
        if (!this.libros.has(id)) {
            console.log(`Este libro no existe en nuestra biblioteca.`);
            return;
        }
        let libro = this.libros.get(id);
        if (!libro.prestado) {
            console.log(`Este libro no ha sido prestado.`);
            return;
        }
        libro.prestado = false;
        delete libro.usuario;
        this.prestamos.delete(id);
        this.libros.set(id, libro);
        console.log(`El libro ha sido devuelto`);
    }

    buscarLibrosPorAutor(autor){
        const librosAutor = [];
        for (const [id, libro] of this.libros.entries()) {
            if (libro.autor === autor) {
              librosAutor.push(libro);
            }
        }
        return librosAutor;
    }

    librosPrestados(){
        const librosPrestados = [];
        for (const [id, usuario] of this.prestamos.entries()) {
            let libro = this.libros.get(id);
            if(libro.prestado){
                librosPrestados.push({ ...libro, usuario });
            }
        }
        return librosPrestados;
    }
}


// Ejemplo de uso
const biblioteca = new Biblioteca();

// Añadir libros
console.log(biblioteca.añadirLibro('Cancion de Hielo y Fuego', 'George RR Martin'));
console.log(biblioteca.añadirLibro('Don Quijote de la Mancha', 'Miguel de Cervantes'));
console.log(biblioteca.añadirLibro('La Sombra del Viento', 'Carlos Ruiz Zafón'));

// Prestar un libro
console.log(biblioteca.prestarLibro('Cancion de Hielo y Fuego', 'Pablo Ortega'));
console.log(biblioteca.prestarLibro('Don Quijote de la Mancha', 'Raisa'));

// Devolver un libro
console.log(biblioteca.devolverLibro('Cancion de Hielo y Fuego', 'Pablo Ortega'));

// Buscar libros por autor
console.log(biblioteca.buscarLibrosPorAutor('Miguel de Cervantes'));

// Obtener todos los libros prestados
console.log(biblioteca.librosPrestados());