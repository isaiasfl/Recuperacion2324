const urlApi ="http://localhost:4010/surveys"

export const getEncuestas = async () =>{
    try{
        const response = await fetch(urlApi);
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error);
    }
}
export const getEncuestasById = async (id) => {
    try {
        const response = await fetch(`${urlApi}/${id}`);
        if (!response.ok) {
            throw new Error(`Error fetching survey with ID ${id}: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}