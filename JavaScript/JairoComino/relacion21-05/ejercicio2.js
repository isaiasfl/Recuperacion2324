//-------------------------------------------//


// ## Ejercicio 2: Análisis de Datos de Ventas

// Dado un array de objetos que representa ventas, implementa las siguientes funcionalidades:

// 1. Calcular el total de ventas por producto.
// 2. Calcular el total de ventas por categoría.
// 3. Encontrar el producto más vendido.
// 4. Encontrar la categoría más vendida.


const ventas = [
    { product: "Laptop", category: "Electronics", quantity: 2, price: 1000 },
    { product: "Phone", category: "Electronics", quantity: 3, price: 500 },
    { product: "Shirt", category: "Clothing", quantity: 5, price: 30 },
    { product: "Laptop", category: "Electronics", quantity: 1, price: 1000 },
    { product: "Shoes", category: "Clothing", quantity: 2, price: 60 },
  ];
  
  
  const totalVentas=()=>{
  //Usamos reduce para agrupar las ventas por producto y calcular el total de ventas por producto
      ventas.reduce((acumulador, venta) => {
      // Si el producto ya está en el acumulador, actualizamos la cantidad y el precio total
      if (acumulador[venta.product]) {
        acumulador[venta.product].quantity += venta.quantity;
        acumulador[venta.product].totalPrice += venta.quantity * venta.price;
      } else {
        // Si el producto no está en el acumulador, lo añadimos
        acumulador[venta.product] = {
          product: venta.product,
          quantity: venta.quantity,
          totalPrice: venta.quantity * venta.price,
        };
      }
      return acumulador;
    }, {});
  }
  
  const totalCategoria=()=>{
      //Usamos reduce para agrupar las categorias por producto y calcular el total de ventas por producto
      ventas.reduce((acumulador, venta) => {
      // Si la categoria ya está en el acumulador, actualizamos la cantidad y el precio total
      if (acumulador[venta.category]) {
        acumulador[venta.category].quantity += venta.quantity;
        acumulador[venta.category].totalPrice += venta.quantity * venta.price;
      } else {
        // Si el producto no está en el acumulador, lo añadimos
        acumulador[venta.category] = {
          category: venta.category,
          quantity: venta.quantity,
          totalPrice: venta.quantity * venta.price,
        };
      }
      return acumulador;
    }, {});
  }
  
  const topVenta=()=>{
    let maxvent=null;
      //TRMEOS TODAS LAS VENTAS POR PRODUCTOS PARA LUEGO COMPARARLAS
  let  totalvetas=totalVentas();
  let contador=0;
    for (const product of totalvetas) {
      for (let i = 0; i < totalvetas.length; i++) {
        let element = totalvetas[i];
        if(product.quantity>element.quantity){
            contador=product.quantity
            maxvent=product;
        }
      }
    }
    return maxvent;
  }
  /////
  const topVentaCategoria=()=>{
    let maxvent=null;
    //TRMEOS TODAS LAS VENTAS POR CATEGORIAS PARA LUEGO COMPARARLAS
    let  totalvetas=totalCategoria();
    let contador=0;
      for (const product of totalvetas) {
        for (let i = 0; i < totalvetas.length; i++) {
          let element = totalvetas[i];
          if(product.quantity>element.quantity){
              contador=product.quantity
              maxvent=product;
          }
        }
      }
      return maxvent;
  }
  
  //----------------------------Test--------------------------//
  console.log(totalVentas,"total delas ventas porproductos");
  console.log(totalCategoria,"total delas ventas por categorias");
  console.log(topVenta,"venta mas alta por producto");
  console.log(topVentaCategoria,"venta mas alta por categorias");
  //----------------------------------------------------------//
  