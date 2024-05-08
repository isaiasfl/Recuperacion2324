const NoticiaMain = ({noticia}) => {
    console.log("Estoy en NoticiaMain con noticia =",noticia);
    console.log("Estoy en NoticiaMain con noticia[1] =",noticia[1]);

    // const {titulo, texto, urlImg} = noticia[0];
    
    return (
      <div className="flex flex-wrap items-center justify-center">
        <div className="max-w-5xl bg-white shadow-md rounded-lg overflow-hidden m-4">
          <div className="flex items-center">
            <img
              src={noticia[1]?.urlImg}
              alt="Foto Noticia"
              className="w-60 h-auto"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{noticia[1]?.titulo}</h2>
              <p className="text-gray-700 text-base">{noticia[1]?.texto}</p>
            </div>
          </div>
        </div>
      </div>
    );
    
  
  
  

}

export default NoticiaMain;