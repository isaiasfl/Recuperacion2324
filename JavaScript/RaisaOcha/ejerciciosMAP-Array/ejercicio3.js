/**
 * ## Ejercicio 3: Sistema de Biblioteca
 *
 * Implementa un sistema de biblioteca que incluya las siguientes funcionalidades:
 *
 * 1. Añadir un nuevo libro.
 * 2. Prestar un libro a un usuario.
 * 3. Devolver un libro.
 * 4. Buscar libros por autor.
 * 5. Obtener todos los libros prestados.
 */
class Library {
  /**
   * Constructor para inicializar la biblioteca.
   * Inicializa los mapas para los libros disponibles y los libros prestados.
   */
  constructor() {
    this.availableBooks = new Map();
    this.rentedBooks = new Map();
  }

  /**
   * Añade un nuevo libro a la biblioteca.
   * @param {*} id - Identificador del libro.
   * @param {*} title - Título del libro.
   * @param {*} author - Autor del libro.
   */
  addBook = (id, title, author) => {
    if (this.availableBooks.has(id)) {
      throw new Error("Ya existe este libro en nuestra biblioteca.");
    }
    this.availableBooks.set(id, { title, author });
    console.log(`Libro "${title}" añadido a la biblioteca.`);
  };

  /**
   * Presta un libro a un usuario.
   * @param {*} id - Identificador del libro a prestar.
   * @param {*} user - Usuario al que se presta el libro.
   */
  rentABook = (id, user) => {
    if (!this.availableBooks.has(id)) {
      throw new Error(`El libro con ID ${id} no está disponible para prestar.`);
    }

    let book = this.availableBooks.get(id);
    book.rented = true;
    book.user = user;
    this.rentedBooks.set(id, book);
    this.availableBooks.delete(id);
    console.log(`Libro "${book.title}" prestado a ${user}.`);
    console.log(this.availableBooks);
    console.log(this.rentedBooks);
  };

  /**
   * Devuelve un libro prestado a la biblioteca para que vuelva a estar disponible.
   * @param {*} id - Identificador del libro a devolver.
   */
  getBackBook = (id) => {
    if (!this.rentedBooks.has(id)) {
      throw new Error(`El libro con ID ${id} no se ha prestado.`);
    }
    let book = this.rentedBooks.get(id);
    book.rented = false;
    delete book.user;
    this.rentedBooks.delete(id);
    this.availableBooks.set(id, book);
    console.log(`Libro "${book.title}" ha sido devuelto.`);
    console.log(this.availableBooks);
    console.log(this.rentedBooks);
  };

  /**
   * Busca libros por autor.
   * @param {*} author - Autor a buscar.
   */
  searchByAuthor = (author) => {
    const results = [];
    for (const [id, book] of this.availableBooks.entries()) {
      if (book.author === author) {
        results.push({ id, ...book });
      }
    }
    console.log("El resultado de la búsqueda es:", results);
  };
}

// Ejemplo de uso
const myLibrary = new Library();
myLibrary.addBook(1, "El Quijote", "Miguel de Cervantes");
myLibrary.addBook(2, "Cien Años de Soledad", "Gabriel García Márquez");
myLibrary.addBook(3, "Orgullo y prejuicio", "Jane Austen");
myLibrary.rentABook(3, "Raisa");
// myLibrary.rentABook(3, "Juan");
myLibrary.rentABook(2, "Julia");
myLibrary.getBackBook(3);
myLibrary.searchByAuthor("Jane Austen");
