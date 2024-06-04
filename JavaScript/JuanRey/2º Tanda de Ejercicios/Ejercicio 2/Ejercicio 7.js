const ventas = [
    { product: "Laptop", category: "Electronics", quantity: 2, price: 1000 },
    { product: "Phone", category: "Electronics", quantity: 3, price: 500 },
    { product: "Shirt", category: "Clothing", quantity: 5, price: 30 },
    { product: "Laptop", category: "Electronics", quantity: 1, price: 1000 },
    { product: "Shoes", category: "Clothing", quantity: 2, price: 60 },
];

function totalProductosVendidos(ventas) {
    const ventasPorProducto = new Map();
    const ventasPorCategoria = new Map();
    const cantidadesPorProducto = new Map();
    const cantidadesPorCategoria = new Map();

    ventas.forEach(venta => {
        const { product, category, quantity, price } = venta;
        const total = quantity * price;
    
        if (ventasPorProducto.has(product)) {
            ventasPorProducto.set(product, ventasPorProducto.get(product) + total);
        } else {
            ventasPorProducto.set(product, total);
        }
    
        if (ventasPorCategoria.has(category)) {
            ventasPorCategoria.set(category, ventasPorCategoria.get(category) + total);
        } else {
            ventasPorCategoria.set(category, total);
        }
    
        if (cantidadesPorProducto.has(product)) {
            cantidadesPorProducto.set(product, cantidadesPorProducto.get(product) + quantity);
        } else {
            cantidadesPorProducto.set(product, quantity);
        }
    
        if (cantidadesPorCategoria.has(category)) {
            cantidadesPorCategoria.set(category, cantidadesPorCategoria.get(category) + quantity);
        } else {
            cantidadesPorCategoria.set(category, quantity);
        }
        });

        let maximaCantidadProducto = 0;
        let productoMasVendido = '';
    
        for (const [product, quantity] of cantidadesPorProducto) {
            if (quantity > maximaCantidadProducto) {
                maximaCantidadProducto = quantity;
                productoMasVendido = product;
            }
        }
    
        let maximaCantidadCategoria = 0;
        let categoriaMasVendida = '';
    
        for (const [category, quantity] of cantidadesPorCategoria) {
            if (quantity > maximaCantidadCategoria) {
                maximaCantidadCategoria = quantity;
                categoriaMasVendida = category;
            }
        }
    
    return {
        totalVentasPorProducto: Object.fromEntries(ventasPorProducto),
        totalVentasPorCategoria: Object.fromEntries(ventasPorCategoria),
        productoMasVendido,
        categoriaMasVendida
    };
}

console.log('Total de ventas por producto:', totalventasProducto(ventas));
console.log('Total de ventas por categoría:', totalVentasCategoria(ventas));
console.log('Producto más vendido:', productoMasVendido(ventas));
console.log('Categoría más vendida:', categoriaMasVendida(ventas));