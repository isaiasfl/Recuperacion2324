import { useEffect, useState } from 'react';
import { getNoticias } from '../helper/getNoticias';
import Noticias from '../components/Noticias';
import Imagen from '../components/Imagen';
import Header from '../components/Header';
import NoticiaPrincipal from '../components/NoticiaPrincipal';

const LandingPage = () => {
    const [textoPrincipal, setTextoPrincipal] = useState("");
    const [imgPrincipal, setImgPrincipal] = useState("");
    const [tituloPrincipal, setTituloPrincipal] = useState("");
    const [primeraNoticia, setPrimeraNoticia] = useState("");
    const [segundaNoticia, setSegundaNoticia] = useState("");
    const [terceraNoticia, setTerceraNoticia] = useState("");
    useEffect(() => {
        const fetchData = async () => {
        try {
            const noticiasMap = await getNoticias();
            
            if (noticiasMap.size > 0) {
            const noticiasArray = Array.from(noticiasMap.values()); 
            const indiceAleatorio = Math.floor(Math.random() * noticiasArray.length);  
            const noticiaAleatoria = noticiasArray[indiceAleatorio];
            setTituloPrincipal(noticiaAleatoria.titulo);
            setTextoPrincipal(noticiaAleatoria.texto);
            setImgPrincipal(noticiaAleatoria.url_img);
            const noticiasRestantes = noticiasArray.filter(noticia => noticia.idnoticia !== noticiaAleatoria.idnoticia);
            const primerasTresNoticias = noticiasRestantes.slice(0, 3);
            setPrimeraNoticia(primerasTresNoticias[0]);
            setSegundaNoticia(primerasTresNoticias[1]);
            setTerceraNoticia(primerasTresNoticias[2]);
            } else {
            console.log("No hay noticias");
            }
        } catch (error) {
            console.error(error);
        }
        };

        fetchData();
    }, []);
    return (
        <>
            <Header />
            <NoticiaPrincipal titulo={tituloPrincipal} texto={textoPrincipal} imagen={imgPrincipal} />
            <Noticias primera={primeraNoticia} segunda={segundaNoticia} tercera={terceraNoticia} />
            <Imagen />
            <button >Acceso</button>
        </>
    )
}

export default LandingPage