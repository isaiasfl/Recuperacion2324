class Biblioteca {
    constructor() {
        this.libros = new Map();
        this.prestamos = new Map();
    }

    agregarLibro(id, titulo, autor) {
        if (this.libros.has(id)) {
            console.log(`El libro con id ${id} ya existe.`);
            return;
        }
        this.libros.set(id, { titulo, autor, prestado: false });
        console.log(`Libro '${titulo}' agregado.`);
    }

    prestarLibro(id, usuario) {
        if (!this.libros.has(id)) {
            console.log(`El libro con id ${id} no existe.`);
            return;
        }
        let libro = this.libros.get(id);
        if (libro.prestado) {
            console.log(`El libro '${libro.titulo}' ya está prestado.`);
            return;
        }
        libro.prestado = true;
        this.libros.set(id, libro);
        this.prestamos.set(id, usuario);
        console.log(`Libro '${libro.titulo}' prestado a ${usuario}.`);
    }

    devolverLibro(id) {
        if (!this.libros.has(id)) {
            console.log(`El libro con id ${id} no existe.`);
            return;
        }
        let libro = this.libros.get(id);
        if (!libro.prestado) {
            console.log(`El libro '${libro.titulo}' no está prestado.`);
            return;
        }
        libro.prestado = false;
        this.libros.set(id, libro);
        this.prestamos.delete(id);
        console.log(`Libro '${libro.titulo}' devuelto.`);
    }

    buscarLibrosPorAutor(autor) {
        let librosDelAutor = [];
        for (let [id, libro] of this.libros.entries()) {
            if (libro.autor === autor) {
                librosDelAutor.push(libro);
            }
        }
        return librosDelAutor;
    }

    obtenerLibrosPrestados() {
        let librosPrestados = [];
        for (let [id, usuario] of this.prestamos.entries()) {
            let libro = this.libros.get(id);
            librosPrestados.push({ ...libro, usuario });
        }
        return librosPrestados;
    }
}


const biblioteca = new Biblioteca();
biblioteca.agregarLibro(1, 'El Quijote', 'Miguel de Cervantes');
biblioteca.agregarLibro(2, 'Cien Años de Soledad', 'Gabriel García Márquez');
biblioteca.agregarLibro(3, 'Don Juan Tenorio', 'José Zorrilla');
biblioteca.agregarLibro(4, 'La Sombra del Viento', 'Carlos Ruiz Zafón');

console.log("Prestando libro id 1 a 'Alberto':");
biblioteca.prestarLibro(1, 'Alberto');

console.log("Devolviendo libro id 1:");
biblioteca.devolverLibro(1);

console.log("Prestando libro id 2 a 'Samu':");
biblioteca.prestarLibro(2, 'Samu');

console.log("Libros del autor 'Gabriel García Márquez':");
console.log(biblioteca.buscarLibrosPorAutor('Gabriel García Márquez'));

console.log("Libros prestados:");
console.log(biblioteca.obtenerLibrosPrestados());
