class Inventario {
    constructor() {
        this.productos = new Map();
    }

    agregarProducto(id, nombre, categoria, precio, cantidad) {
        if (this.productos.has(id)) {
            console.log(`El producto con id ${id} ya existe.`);
            return;
        }
        this.productos.set(id, { nombre, categoria, precio, cantidad });
        console.log(`Producto ${nombre} agregado.`);
    }

    actualizarCantidadProducto(id, cantidad) {
        if (!this.productos.has(id)) {
            console.log(`El producto con id ${id} no existe.`);
            return;
        }
        let producto = this.productos.get(id);
        producto.cantidad = cantidad;
        this.productos.set(id, producto);
        console.log(`Cantidad del producto ${producto.nombre} actualizada a ${cantidad}.`);
    }

    eliminarProducto(id) {
        if (!this.productos.has(id)) {
            console.log(`El producto con id ${id} no existe.`);
            return;
        }
        let producto = this.productos.get(id);
        this.productos.delete(id);
        console.log(`Producto ${producto.nombre} eliminado.`);
    }

    buscarProductosPorCategoria(categoria) {
        let productosEnCategoria = [];
        for (let [id, producto] of this.productos.entries()) {
            if (producto.categoria === categoria) {
                productosEnCategoria.push(producto);
            }
        }
        return productosEnCategoria;
    }

    obtenerProductosOrdenadosPorPrecio() {
        let listaProductos = Array.from(this.productos.values());
        listaProductos.sort((a, b) => a.precio - b.precio);
        return listaProductos;
    }
}


const inventario = new Inventario();
inventario.agregarProducto(1, 'Manzana', 'Fruta', 1.5, 100);
inventario.agregarProducto(2, 'Plátano', 'Fruta', 1.0, 150);
inventario.agregarProducto(3, 'Naranja', 'Fruta', 2.0, 120);
inventario.agregarProducto(4, 'Tomate', 'Verdura', 1.2, 80);
inventario.agregarProducto(5, 'Zanahoria', 'Verdura', 0.8, 200);

console.log("Actualizando cantidad del producto con id 2:");
inventario.actualizarCantidadProducto(2, 180);

console.log("Eliminando producto con id 4:");
inventario.eliminarProducto(4);

console.log("Productos en la categoría 'Fruta':");
console.log(inventario.buscarProductosPorCategoria('Fruta'));

console.log("Productos ordenados por precio:");
console.log(inventario.obtenerProductosOrdenadosPorPrecio());
