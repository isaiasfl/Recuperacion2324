const CardNoticia = ({noticia}) => {

    const {titulo, urlImg} = noticia;

return (
<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img src={urlImg} alt={titulo} className="w-full h-40 object-cover" />
  <div className="px-6 py-4">
    <h2 className="text-xl text-gray-800 font-semibold">{titulo}</h2>
  </div>
</div>


)

}


export default CardNoticia;