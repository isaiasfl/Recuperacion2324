const RandomCard = ({ noticias }) => {
    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    // Obtener las noticias con posiciones aleatorias
    const noticiasAleatorias = shuffleArray(noticias);

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:w-70">
            {noticiasAleatorias.map((noticia) => (
                <div key={noticia.idnoticia} className="bg-white rounded-md p-4">
                    <h2 className="text-lg font-semibold mb-2">{noticia.titulo}</h2>
                    <p className="mb-4">{noticia.texto}</p>
                    <img src={noticia.urlimagen} alt={noticia.titulo} className="w-full h-auto" />
                </div>
            ))}
        </div>
    );
};
export default RandomCard;
