const ventas = [
    { product: "Laptop", category: "Electronics", quantity: 2, price: 1000 },
    { product: "Phone", category: "Electronics", quantity: 3, price: 500 },
    { product: "Shirt", category: "Clothing", quantity: 5, price: 30 },
    { product: "Laptop", category: "Electronics", quantity: 1, price: 1000 },
    { product: "Shoes", category: "Clothing", quantity: 2, price: 60 },
  ];

const totalVentasProducto = (producto) => {
  let ventaProducto= 0;
  ventas.forEach(({ product, quantity, price }) => {
    if (product === producto) {
      ventaProducto += quantity * price;
    }
  });
  console.log(ventaProducto);
  return ventaProducto
}

const totalVentasCategoria = (categoria) =>{
  let ventaCategoria = 0;
  ventas.forEach(({ category, quantity, price }) => {
    if (categoria === category) {
        ventaCategoria += quantity * price;
    }
  });
  console.log(ventaCategoria);
  return ventaCategoria
}

const productoMasVendido = () =>{
  let productMV= "";
  let mayor = 0;
  ventas.forEach(({ product, quantity })=>{
    if(quantity>mayor){
      mayor=quantity;
      productMV= product;
    }
  }) 
  console.log(productMV+" "+ mayor);
  return [productMV, mayor]
}

const categoriaMasVendida = () => {
  const totalPorCategoria = {};

  ventas.forEach(({ category, quantity }) => {
    if (!totalPorCategoria[category]) {
      totalPorCategoria[category] = 0;
    }
    totalPorCategoria[category] += quantity;
  });

  let mayor = 0;
  let categoriaMasVendida = '';

  for (const category in totalPorCategoria) {
    if (totalPorCategoria[category] > mayor) {
      mayor = totalPorCategoria[category];
      categoriaMasVendida = category;
    }
  }

  console.log(categoriaMasVendida + " " + mayor);
  return [categoriaMasVendida, mayor];
}

// --------- TEST ------------
categoriaMasVendida();
totalVentasCategoria("Clothing");
totalVentasProducto("Phone");
productoMasVendido();