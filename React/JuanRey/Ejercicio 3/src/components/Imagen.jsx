import { useEffect, useState } from 'react'
import { getImagenes } from '../helper/getImg'


const Imagen = () => {

    const [imagen, setImagen] = useState([])
    useEffect(() => { 
    const fetchData = async () => {
        try {
        const imagenes = await getImagenes();
        const shuffledImagenes = imagenes.sort(() => Math.random() - 0.5);
        setImagen(shuffledImagenes[0]);
        }catch(error){
        console.error(error);
        }
    }
    fetchData();
    }, [])
    return (
        <div><img src={imagen} width="70%"/></div>
    )
}

export default Imagen