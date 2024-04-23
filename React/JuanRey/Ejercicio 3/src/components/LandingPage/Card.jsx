
const Card = ({noticia}) => {
    return (
        <div>
            <div className="p-4 rounded-lg shadow-md  my-4" >
                <p>Número de Bastidor: {noticia.nbastidor}</p>
                <p>Marca: {noticia.marca}</p>
                <p>Modelo: {noticia.modelo}</p>
                <p>Tipo: {noticia.tipo}</p>
                <p>Color: {noticia.color}</p>
                <p>Matrícula: {noticia.matricula}</p>
                <p>Fecha de Alta: {new Date(noticia.fechaAlta).toLocaleDateString()}</p>
            </div>
        </div>
    )
}

export default Card