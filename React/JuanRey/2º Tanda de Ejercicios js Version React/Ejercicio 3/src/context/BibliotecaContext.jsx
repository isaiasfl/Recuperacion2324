import { createContext, useState, useContext } from 'react';

const BibliotecaContext = createContext();

const initialLibros = new Map();
const initialLibrosPrestados = new Map();

export const BibliotecaProvider = ({ children }) => {
    const [libros, setLibros] = useState(initialLibros);
    const [librosPrestados, setLibrosPrestados] = useState(initialLibrosPrestados);

    const addBook = (id, titulo, autor) => {
        if (libros.has(id)) {
        console.log('El libro ya existe.');
        return;
        }
        const nuevosLibros = new Map(libros);
        nuevosLibros.set(id, { titulo, autor, prestado: false });
        setLibros(nuevosLibros);
        console.log('Libro añadido con éxito.');
    };

    const prestarLibro = (id, usuario) => {
        if (!libros.has(id)) {
        console.log('El libro no existe.');
        return;
        }
        const libro = libros.get(id);
        if (libro.prestado) {
        console.log('El libro ya está prestado.');
        return;
        }

        libro.prestado = true;
        const nuevosLibros = new Map(libros);
        nuevosLibros.set(id, libro);

        const nuevosLibrosPrestados = new Map(librosPrestados);
        if (nuevosLibrosPrestados.has(usuario)) {
        nuevosLibrosPrestados.get(usuario).push(id);
        } else {
        nuevosLibrosPrestados.set(usuario, [id]);
        }

        setLibros(nuevosLibros);
        setLibrosPrestados(nuevosLibrosPrestados);
        console.log('Libro prestado con éxito.');
    };

    const devolverLibro = (id, usuario) => {
        if (!libros.has(id)) {
        console.log('El libro no existe.');
        return;
        }

        const libro = libros.get(id);
        if (!libro.prestado) {
        console.log('El libro no está prestado.');
        return;
        }

        libro.prestado = false;
        const nuevosLibros = new Map(libros);
        nuevosLibros.set(id, libro);

        const nuevosLibrosPrestados = new Map(librosPrestados);
        if (nuevosLibrosPrestados.has(usuario)) {
        const librosUsuario = nuevosLibrosPrestados.get(usuario).filter(libroId => libroId !== id);
        if (librosUsuario.length === 0) {
            nuevosLibrosPrestados.delete(usuario);
        } else {
            nuevosLibrosPrestados.set(usuario, librosUsuario);
        }
        }

        setLibros(nuevosLibros);
        setLibrosPrestados(nuevosLibrosPrestados);
        console.log('Libro devuelto con éxito.');
    };

    const buscarLibrosPorAutor = (autor) => {
        let resultado = [];
        for (let [id, libro] of libros) {
        if (libro.autor === autor) {
            resultado.push({ id, ...libro });
        }
        }
        return resultado;
    };

    const obtenerLibrosPrestados = () => {
        let resultado = [];
        for (let [id, libro] of libros) {
        if (libro.prestado) {
            resultado.push({ id, ...libro });
        }
        }
        return resultado;
    };

    const guardarEnLocalStorage = () => {
        localStorage.setItem('bibliotecaState', JSON.stringify({
        libros: Array.from(libros.entries()),
        librosPrestados: Array.from(librosPrestados.entries()),
        }));
        console.log('Estado guardado en LocalStorage');
    };

    return (
    <BibliotecaContext.Provider value={{
        libros,
        librosPrestados,
        addBook,
        prestarLibro,
        devolverLibro,
        buscarLibrosPorAutor,
        obtenerLibrosPrestados,
        guardarEnLocalStorage
        }}>
        {children}
        </BibliotecaContext.Provider>
    );
};

export const useBiblioteca = () => {
    return useContext(BibliotecaContext);
};
