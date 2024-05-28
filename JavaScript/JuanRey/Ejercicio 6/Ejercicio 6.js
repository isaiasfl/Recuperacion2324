

const createInventory = () => {
    // estructura para guardar la informacion
    const dataInventory = new Map();

    // metodos para trabajar con los elementos del inventario
    const addProduct = (id, product, quantity, price, type) => {
        if (dataInventory.has(id)) {
            throw new Error("Producto ya existe");
        }
        dataInventory.set(id, {product: product, quantity: quantity, price: price, type: type});
    }
    const deleteProduct = (id) => {
        dataInventory.delete(id);
    }
    const getProductsByPrice = (price) => {
        return dataInventory.filter(product => product.price === price);
    }
    const getProductsByType = (type) => {
        dataInventory.filter(product => product.type === type);
    }
    const getProductsOrderByPrice = (price) => {
        [...dataInventory.values()].sort((a, b) => a.price - b.price);
    }
    const updateProduct = (id) => {
        if (!dataInventory.has(id)) {
            throw new Error("Producto no existe");
        }
        const product = dataInventory.get(id);
        product.quantity += newQuantity;
        dataInventory.set(id, product);
    }
    const getAllProducts = [...dataInventory.values()];

    return {
        addProduct,
        deleteProduct,
        getProductsByType,
        getProductsByPrice,
        updateProduct,
    }
}


/// ---- Test o pruebas ----

const miInventario = createInventory();
const actualizarInventario = miInventario.updateProduct(product)
inventory.addProduct(1, 'Producto A', 'Categoría 1', 10.99, 100);
inventory.addProduct(2, 'Producto B', 'Categoría 2', 5.99, 200);
inventory.addProduct(3, 'Producto C', 'Categoría 1', 8.99, 150);

inventory.updateProduct(1, 120);

inventory.deleteProduct(2);

console.log('Productos en Categoría 1:', inventory.searchByCategory('Categoría 1'));

// Obtener la lista de productos por orden de precio
console.log('Productos ordenados por precio:', inventory.getProductsSortedByPrice());