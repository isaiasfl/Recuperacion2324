

const getdata= async(apiUrl)=>{
    try{
        //voy a realizar una petición a api
		const response= await fetch(apiUrl);
        const data = await response.json();
        // console.log("data es ", data);
        return data;

      } catch (error) {
        console.error('Error al obtener los datos:', error);
        return [];
    }
}
export default getdata;