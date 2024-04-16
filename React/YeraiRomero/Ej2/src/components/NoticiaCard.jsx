const NoticiaCard = ({ titulo, texto, urlimg }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>{texto}</p>
      <img src={urlimg} alt={titulo} />
    </div>
  );
}
export default NoticiaCard;