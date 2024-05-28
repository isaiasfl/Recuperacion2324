const ventas = [
    { producto: "Laptop", categoria: "Electrónica", cantidad: 2, precio: 1000 },
    { producto: "Teléfono", categoria: "Electrónica", cantidad: 3, precio: 500 },
    { producto: "Camiseta", categoria: "Ropa", cantidad: 5, precio: 30 },
    { producto: "Laptop", categoria: "Electrónica", cantidad: 1, precio: 1000 },
    { producto: "Zapatos", categoria: "Ropa", cantidad: 2, precio: 60 },
  ];
  
  function totalVentasPorProducto(ventas) {
    const ventasPorProducto = new Map();
    ventas.forEach(({ producto, cantidad, precio }) => {
      if (ventasPorProducto.has(producto)) {
        ventasPorProducto.set(producto, ventasPorProducto.get(producto) + cantidad * precio);
      } else {
        ventasPorProducto.set(producto, cantidad * precio);
      }
    });
    return ventasPorProducto;
  }
  
  function totalVentasPorCategoria(ventas) {
    const ventasPorCategoria = new Map();
    ventas.forEach(({ categoria, cantidad, precio }) => {
      if (ventasPorCategoria.has(categoria)) {
        ventasPorCategoria.set(categoria, ventasPorCategoria.get(categoria) + cantidad * precio);
      } else {
        ventasPorCategoria.set(categoria, cantidad * precio);
      }
    });
    return ventasPorCategoria;
  }
  
  function productoMasVendido(ventas) {
    const ventasPorProducto = new Map();
    ventas.forEach(({ producto, cantidad }) => {
      if (ventasPorProducto.has(producto)) {
        ventasPorProducto.set(producto, ventasPorProducto.get(producto) + cantidad);
      } else {
        ventasPorProducto.set(producto, cantidad);
      }
    });
    
    let maxVentas = 0;
    let productoTop = '';
    for (let [producto, cantidad] of ventasPorProducto) {
      if (cantidad > maxVentas) {
        maxVentas = cantidad;
        productoTop = producto;
      }
    }
    return productoTop;
  }
  
  function categoriaMasVendida(ventas) {
    const ventasPorCategoria = new Map();
    ventas.forEach(({ categoria, cantidad }) => {
      if (ventasPorCategoria.has(categoria)) {
        ventasPorCategoria.set(categoria, ventasPorCategoria.get(categoria) + cantidad);
      } else {
        ventasPorCategoria.set(categoria, cantidad);
      }
    });
  
    let maxVentas = 0;
      let categoriaTop = '';
      for (let [categoria, cantidad] of ventasPorCategoria) {
      if (cantidad > maxVentas) {
        maxVentas = cantidad;
        categoriaTop = categoria;
      }
    }
    return categoriaTop;
  }
  
 
  console.log("Total de ventas por producto:");
  console.log(totalVentasPorProducto(ventas));
  
  console.log("Total de ventas por categoría:");
  console.log(totalVentasPorCategoria(ventas));
  
  console.log("Producto más vendido:");
  console.log(productoMasVendido(ventas));
  
  console.log("Categoría más vendida:");
  console.log(categoriaMasVendida(ventas));
  