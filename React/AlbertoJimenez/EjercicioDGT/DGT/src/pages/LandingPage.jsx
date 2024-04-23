import { useEffect, useState } from "react";
import Header from "../components/Header";
import NoticiaMain from "../components/NoticiaMain";
import CardNoticia from "../components/CardNoticia";


const LandingPage = () => {
    const [noticiasData, setNoticiasData] = useState([]);
   


    useEffect(() => {
        const fetchdata = async () => {
          try {
            const response = await fetch("http://localhost:4000/info");
            if (!response.ok) {
              throw new Error("Error fetching");
            }
    
            const data = await response.json();
            setNoticiasData(data[0].noticias);
            

          } catch (error) {
            console.error("Error fetching data noticias ", error);
          }
        };


        fetchdata();

      }, []);

      
      return (
        <>
        <Header></Header>
        <NoticiaMain noticia={noticiasData} />
        <CardNoticia noticia={noticiasData}></CardNoticia>
        </>
      )
}


export default LandingPage;