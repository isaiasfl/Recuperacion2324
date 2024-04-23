import { useEffect, useState } from "react";

const NoticiaDestacada = ({ noticias }) => {

  const [noticia, setNoticia] = useState({})

  const noticiaDestacadaAleatoria = (array) => {
    const indiceAleatorio = Math.trunc(Math.random() * array.length);
    const noticiaAleatoria = array[indiceAleatorio];
    setNoticia(noticiaAleatoria) 
  }

  useEffect(() => {
    noticias && noticiaDestacadaAleatoria(noticias)
  }, [])
  
  return (
    <div className="border border-black m-2 my-10 flex flex-row">
        <div className="border border-black m-1 w-1/2">
          <img src={noticia?.url_img} alt="Imagen Noticia" className="w-full h-full rounded-md object-cover object-center" />
        </div>
        <div className="border border-black m-1 w-1/2 flex justify-center items-center">
          <p className="text-lg text-justify p-2">{noticia?.texto}</p>
        </div>
    </div>
  )
}

export default NoticiaDestacada
