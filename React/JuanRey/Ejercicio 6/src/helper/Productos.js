const apiUrl="http://localhost:4000/productos";

export async function getProductos(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error);
    }
}