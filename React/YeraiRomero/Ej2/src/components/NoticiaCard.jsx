const NoticiaCard = ({ titulo, texto, url_img }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>{texto}</p>
      <img className="noticia-image" src={url_img} alt={titulo} />
    </div>
  );
}
export default NoticiaCard;