import { useEffect, useState } from "react";

const RandomCard = () => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        fetch('https://localhost:4000/info/noticias')
        .then((response) => response.json())
        .then((data) => setNoticias(data))
        .catch((error) => console.error("Error al obtener las noticias: " + error));
    }, []);

    // Función para obtener un array con las posiciones aleatorias
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
        <div>
            {/* Renderizar las noticias con posiciones aleatorias */}
            {noticiasAleatorias.map((noticia) => (
                <div key={noticia.idnoticia}>
                    <h2>{noticia.titulo}</h2>
                    <p>{noticia.texto}</p>
                    <img>{noticia.img}</img>
                    {/* Puedes añadir la imagen asociada a la noticia aquí */}
                </div>
            ))}
        </div>
    );
};

export default RandomCard;
