import { useEffect, useState } from "react"
import Imagen from "../components/landingPage/Imagen"
import NoticiaDestacada from "../components/landingPage/NoticiaDestacada"
import SeccionNoticias from "../components/landingPage/SeccionNoticias"
import Titulo from "../components/landingPage/Titulo"

const LandingPage = () => {
    const [noticias, setNoticias] = useState([])
    const [imagenes, setImagenes] = useState([])


    useEffect(() => {
        const getNoticiasData = async () => {
          try {
            const response = await fetch('http://localhost:4000/info');

            if (!response.ok) {
            throw new Error("Error");
            }

            const data = await response.json();
            setNoticias(data[0].noticias)
            //console.log("Noticias que guardo en el estado",data[0].noticias)
          } catch (error) {
              console.error(error);
          }
        }

        const getImagenesData = async () => {
          try {
            const response = await fetch('http://localhost:4000/info');

            if (!response.ok) {
            throw new Error("Error");
            }

            const data = await response.json();
            setImagenes(data[0].imagenes)
          } catch (error) {
              console.error(error);
          }
        }
      getNoticiasData()
      //console.log("Noticias cuando ejecuta la funcion",noticias)
      getImagenesData()
    }, [])
    
  return (
    <div className="border border-black">
        <Titulo />
        {noticias && <NoticiaDestacada noticias={noticias}/>}
        <SeccionNoticias noticias={noticias}/>
        <Imagen imagenes={imagenes}/>
        <div className="text-center mt-8 mb-5">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
              px-4 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700"
            //   onClick={}
            >
              Acceso
            </button>
          </div>
    </div>
  )
}

export default LandingPage
