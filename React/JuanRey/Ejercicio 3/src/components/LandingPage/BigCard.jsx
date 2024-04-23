
const NoticiaMayor = ({ noticias}) => {
    
    const primeraNoticia = noticias.length > 0 ? noticias[0] : null;

    return (
        <div className="">
        <p>Tarjeta grande</p>
            {primeraNoticia && (
                <div key={primeraNoticia.idnoticia}>
                    <h2>{primeraNoticia.titulo}</h2>
                    <p>{primeraNoticia.texto}</p>
                    <img src={primeraNoticia.urlimagen} alt={primeraNoticia.titulo} />
                </div>
            )}
        </div>
    );
}

export default NoticiaMayor