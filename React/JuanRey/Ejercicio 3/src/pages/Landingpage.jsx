import { useEffect, useState } from "react"
import BigCard from "../components/LandingPage/BigCard"
import ImgCard from "../components/LandingPage/ImgCard"
import RandomCard from "../components/LandingPage/RandomCard"
import Title from "../components/LandingPage/Title"

const Landingpage = () => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/info')
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data) && data.length > 0 && data[0].noticias) {
                    setNoticias(data[0].noticias);
                } else {
                    console.error("El objeto 'info' está indefinido o vacío.");
                }
            })
            .catch((error) => console.error("Error al obtener las noticias: " + error));
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-30">
                <Title />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <BigCard noticias={noticias} />
                    <RandomCard noticias={noticias} />
                    <ImgCard />
                </div>
                <div className="text-center mt-8">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Ver más
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Landingpage;
