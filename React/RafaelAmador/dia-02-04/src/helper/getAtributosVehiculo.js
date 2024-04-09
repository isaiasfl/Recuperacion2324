const apiUrl="http://localhost:4000/altas";

export async function getAtributos(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error);
    }
}