
const Noticia = (props) => {
  const { noticia } = props;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md m-2 mx-8">
      
      <img src={noticia.url_img} alt="Imagen noticia" className="w-full" />
      
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{noticia.titulo}</div>
        <p className="text-gray-700 text-base">{noticia.texto}</p>
      </div>
    </div>
  )
}

export default Noticia
