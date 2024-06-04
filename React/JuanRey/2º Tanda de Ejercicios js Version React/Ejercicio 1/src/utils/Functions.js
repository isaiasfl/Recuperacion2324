

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