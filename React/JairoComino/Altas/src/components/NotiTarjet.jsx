import  { useState } from 'react'
import { useEffect } from 'react'
import getdata from '../helpers/getdata';

function NotiTarjet() {
const [noticias, setNoticias] = useState([])

     useEffect(() => {
        const fechData = async () => {
            try {
                // Obtener todos los datos de la API utilizando la función getdata
                const allData = await getdata("http://localhost:4000/info");
                 
                // Obtener tres índices aleatorios sin repetición
                const randomIndexes = [];
                while (randomIndexes.length < 3) {
                    const random = Math.floor(Math.random() * allData.length);
                    randomIndexes.push(allData[random]);
                }
                setNoticias(randomIndexes);
                console.log(noticias);
            } catch (error) {
                console.error('Error en fetchData:', error);               
            }
        };
             // ejecuto la función
              fechData();
     }, [])
      
  return (
  <>
<section className="bg-gray-100 py-12">
    <div className="container mx-auto flex flex-wrap justify-center ">
       
    {noticias.map((notica) => (
                    <div className="w-full md:w-1/3 p-4">
            <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg ">
                <img 
                    src={notica.url_img} 
                    alt={notica.id} 
                    className="w-full transition-opacity h-32 duration-300 hover:opacity-75 "
                />
                <div className="p-4 " >
                    <h4 className="text-xl font-semibold mb-2 text-gray-800">{notica.titulo}</h4>
                    <p className="text-gray-600 leading-relaxed font-medium ">
                        {notica.texto.slice(0,190)}
                    </p>
                    <a 
                        href="#" 
                        className="mt-4 inline-block items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Ver mas
                    </a>
                </div>
            </div>
        </div> 
                ))}
       
       
       
    </div>
</section>




  </>
  )
}

export default NotiTarjet