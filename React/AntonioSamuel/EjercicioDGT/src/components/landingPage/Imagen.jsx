import { useEffect, useState } from "react";

const Imagen = (props) => {
  const { imagenes } = props

  const [imagen, setImagen] = useState({})

  const imagenAleatoria = (array) => {
    const indiceAleatorio = Math.trunc(Math.random() * array.length);
    const imgAleatoria = array[indiceAleatorio];
    setImagen(imgAleatoria) 
  }

  useEffect(() => {
    imagenAleatoria(imagenes)
  }, [imagenes])
  
  return (
    <div className="border border-black m-2 mt-20 w-1/2 flex flex-col items-center">
      <img src={imagen} alt="Imagen Aleatoria" className="" />
    </div>
  )
}

export default Imagen
