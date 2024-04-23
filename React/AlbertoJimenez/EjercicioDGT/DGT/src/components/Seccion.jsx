import CardNoticia from "./CardNoticia"

const Seccion = ({noticias}) => {

    return (

        <>

        {
        
        
        noticias.map((noticia) => (
            <CardNoticia key={noticia.id} noticia={noticia}></CardNoticia>

        ) )}
        
        </>
    )
}