const apiUrl="http://localhost:4000/pokemones";

export async function getPokemones(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error);
    }
}