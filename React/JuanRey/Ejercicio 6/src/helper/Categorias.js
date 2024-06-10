const apiUrl="http://localhost:4000/productos";

export async function getCategorias(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        const categoriasUnicas = [...new Set(data.map(producto => producto.categoria))];
        return categoriasUnicas
    }catch(error){
        console.error(error);
    }
}