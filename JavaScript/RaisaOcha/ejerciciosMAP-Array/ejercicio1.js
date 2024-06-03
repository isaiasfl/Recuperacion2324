/**
 * Crea un sistema de gestión de inventario para una tienda. Creando una función `createInventory()` Debes implementar las siguientes funcionalidades almacenando la información en una estructura MAP.

1. Añadir un nuevo producto.
2. Actualizar la cantidad de un producto existente.
3. Eliminar un producto.
4. Buscar productos por categoría.
5. Obtener la lista de productos por orden de precio.
 * 
 * 
 */

const createInventory = () => {
  const myData = new Map();

  /**
   * Función para añadir un producto a un inventario
   * @param {integer} id
   * @param {String} name
   * @param {integer} stock
   * @param {integer} price
   * @param {String} category
   * @returns {ini}
   */

  const addInventory = (id, name, stock, price, category) => {
    if (myData.has(id)) {
      throw new Error("Ya existe este producto en nuestro inventario.");
    }
    myData.set(id, { name, stock, price, category });
  };
  // RECUERDA, ELIMINAR M¡PRIMERO LO QUE NO QUEREMOS
  /**
   * Función para eliminar un producto de un inventario
   * @param {integer} id
   */
  const deleteProduct = (id) => {
    if (!myData.has(id)) {
      throw new Error("No existe ese producto en nuestro inventario.");
    }
    myData.delete(id);
    console.log("Product deleted");
  };

  /**
   * Función para editar el stock de un producto dle inventario
   * @param {integer} id
   * @param {integer} newStock
   */
  const updateStock = (id, newStock) => {
    if (!myData.has(id)) {
      throw new Error("No existe ese producto en nuestro inventario.");
    }
    const editProduct = myData.get(id);
    editProduct.stock = newStock;
    myData.set(id, editProduct);
  };

  /**
   * Función para buscar productos del inventario  por categoria
   * @param {String} category
   */
  const searchByCategory = (category) => {
    const results = [];
    for (const [id, product] of myData.entries()) {
      if (product.category === category) {
        results.push({ id, ...product });
      }
    }
    console.log("El resultado de la busqueda es:", results);
  };

  /**
   * Función que nos devuelve los productos de un inventario de mayor a menos precio
   */
  const getProductsByPrice = () => {
    const productsArray = Array.from(myData.values());
    productsArray.sort((a, b) => a.price - b.price);
    console.log(
      "Prodcutos ordenador por precio de mayor a menor:",
      productsArray
    );
  };

  return {
    myData,
    addInventory,
    deleteProduct,
    updateStock,
    searchByCategory,
    getProductsByPrice,
  };
};

const myInventory = createInventory();

// Ejemplos de uso
// add
myInventory.addInventory(2, "mesa", 30, 200, "mesas");
myInventory.addInventory(3, "mesa plegable", 30, 200, "mesas");
myInventory.addInventory(4, "flexo", 30, 15, "lamparas");
myInventory.addInventory(5, "lampara mimbre", 30, 35, "lamparas");
// delete
// myInventory.deleteProduct(1);
myInventory.deleteProduct(2);
// edit
myInventory.updateStock(5, 20);
// searchByCategory
myInventory.searchByCategory("lamparas");
// getProductsByPrice
myInventory.getProductsByPrice();

console.log("Mi inventario:", myInventory.myData);


