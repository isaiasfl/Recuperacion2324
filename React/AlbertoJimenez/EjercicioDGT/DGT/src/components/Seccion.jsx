import { useEffect, useState } from "react";
import CardNoticia from "./CardNoticia"

const Seccion = ({noticias}) => {
    const [tresNoticias, setTresNoticias] = useState([]);

    useEffect(() => {
        setTresNoticias((noticias));
    
    }, [noticias])
    

return (
    <>
        <div className="flex overflow-x-auto">
            {tresNoticias.map(noticia => (
                <div key={noticia.id} className="flex-shrink-0 w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
                    <CardNoticia noticia={noticia}></CardNoticia>
                </div>
            ))}
        </div>
    </>
)

}

export default Seccion;