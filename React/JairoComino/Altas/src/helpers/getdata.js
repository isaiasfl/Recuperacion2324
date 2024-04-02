

const getdata= async(apiUrl)=>{
    try{
        //voy a realizar una petición a pokeapi
		const response= await fetch(apiUrl);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        return [];
    }
}
export default getdata;