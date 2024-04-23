
const TarjetaImg = ({ noticias }) => {

    return (
        <div className="">
            {noticias && (
                <div key={noticias.idnoticia}>
                <p>IMAGEN GRANDE</p>
                    <img src={noticias.urlimagen} alt={noticias.titulo} />
                </div>
            )}
        </div>
    );
}

export default TarjetaImg