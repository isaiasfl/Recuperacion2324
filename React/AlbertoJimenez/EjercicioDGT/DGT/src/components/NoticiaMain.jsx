const NoticiaMain = ({noticia}) => {
    console.log("Estoy en NoticiaMain con noticia =",noticia);
    console.log("Estoy en NoticiaMain con noticia[1] =",noticia[1]);

    // const {titulo, texto, urlImg} = noticia[0];
    
    return (
        <div className="w-90vw bg-gray-200 h-40 flex items-center justify-center">
        <div className="w-5/6 bg-white h-full flex items-center">
          <img
            src={noticia[1]?.urlImg}
            alt="Foto Noticia"
            className=" w-16 h-auto ml-4"
          />

        <span className="ml-4 text-lg">
            {noticia[1]?.titulo}
          </span>
        <span className="ml-4 text-lg">
            {noticia[1]?.texto}
        </span>
        </div>
      </div>
        
    )


}

export default NoticiaMain;