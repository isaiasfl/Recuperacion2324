const Biblioteca = () =>{
    
    let libros = new Map();
    let librosPrestados = new Map();

    const addBook = (id, titulo, autor) => {
        if (this.libros.has(id)) {
            console.log('El libro ya existe.');
            return;
        }
        this.libros.set(id, { titulo, autor, prestado: false });
        console.log('Libro añadido con éxito.');
    };

    const prestarLibro = (id, usuario) => {
        if (!this.libros.has(id)) {
            console.log('El libro no existe.');
            return;
        }
        let libro = this.libros.get(id);
        if (libro.prestado) {
            console.log('El libro ya está prestado.');
            return;
        }

        libro.prestado = true;
        this.libros.set(id, libro);
        if (this.librosPrestados.has(usuario)) {
            this.librosPrestados.get(usuario).push(id);
        } else {
            this.librosPrestados.set(usuario, [id]);
        }
    
        console.log('Libro prestado con éxito.');
    };

    const devolverLibro = (id, usuario) => {
        if (!this.libros.has(id)) {
            console.log('El libro no existe.');
            return;
        }
    
        let libro = this.libros.get(id);
        if (!libro.prestado) {
            console.log('El libro no está prestado.');
            return;
        }
    
        libro.prestado = false;
        this.libros.set(id, libro);
    
        if (this.librosPrestados.has(usuario)) {
            const librosUsuario = this.librosPrestados.get(usuario);
            this.librosPrestados.set(usuario, librosUsuario.filter(libroId => libroId !== id));
            if (this.librosPrestados.get(usuario).length === 0) {
            this.librosPrestados.delete(usuario);
            }
        }
    
        console.log('Libro devuelto con éxito.');
    };

    const buscarLibrosPorAutor = (autor) => {
        let resultado = [];
        for (let [id, libro] of this.libros) {
            if (libro.autor === autor) {
            resultado.push({ id, ...libro });
            }
        }
        return resultado;
    };

    const obtenerLibrosPrestados = () => {
        let resultado = [];
        for (let [id, libro] of this.libros) {
            if (libro.prestado) {
            resultado.push({ id, ...libro });
            }
        }
        return resultado;
    };

    return {
        addBook,
        prestarLibro,
        devolverLibro,
        buscarLibrosPorAutor,
        obtenerLibrosPrestados,
        libros,
        librosPrestados
    };
}

const biblioteca = Biblioteca();

biblioteca.addBook(1, '1984', 'George Orwell');
biblioteca.addBook(2, 'Brave New World', 'Aldous Huxley');
biblioteca.addBook(3, 'Fahrenheit 451', 'Ray Bradbury');
console.log('Libros después de añadir:', Array.from(biblioteca.libros.values()));

biblioteca.prestarLibro(1, 'usuario1');
biblioteca.prestarLibro(2, 'usuario2');
biblioteca.prestarLibro(3, 'usuario1');
console.log('Libros después de prestar:', Array.from(biblioteca.libros.values()));
console.log('Libros prestados:', Array.from(biblioteca.librosPrestados.entries()));

biblioteca.devolverLibro(1, 'usuario1');
console.log('Libros después de devolver:', Array.from(biblioteca.libros.values()));
console.log('Libros prestados después de devolver:', Array.from(biblioteca.librosPrestados.entries()));

const librosOrwell = biblioteca.buscarLibrosPorAutor('George Orwell');
console.log('Libros de George Orwell:', librosOrwell);

const librosPrestados = biblioteca.obtenerLibrosPrestados();
console.log('Todos los libros prestados:', librosPrestados);