import { useEffect, useState } from "react";
import Header from "../components/Header";
import NoticiaMain from "../components/NoticiaMain";

import noticiasRandom from "../helpers/noticiasRandom";
import Seccion from "../components/Seccion";


// const LandingPage = () => {
//     const [noticiasData, setNoticiasData] = useState([]);
//     const [tresNoticias, setTresNoticias] = useState([]);
   


//     useEffect(() => {
//         const fetchdata = async () => {
//           try {
//             const response = await fetch("http://localhost:4000/info");
//             if (!response.ok) {
//               throw new Error("Error fetching");
//             }
    
//             const data = await response.json();
//             setNoticiasData(data[0].noticias);
//             setTresNoticias(noticiasRandom(data[0].noticias));
            

//           } catch (error) {
//             console.error("Error fetching data noticias ", error);
//           }
//         };


//         fetchdata();

//       }, []);

      
//       return (
//         <>
//             <Header></Header>
//             <NoticiaMain noticia={noticiasData} />
//             {
//                 tresNoticias.map(noticia => (
//                     <CardNoticia key={noticia.id} noticia={noticia}></CardNoticia>
//                 ))
//             }
           
//         </>
//     )
    
// }

const LandingPage = () => {
  const [noticiaMain, setNoticiaMain] = useState([]);
  const [noticiasData, setNoticiasData] = useState([]);
  
 


  useEffect(() => {
      const fetchdata = async () => {
        try {
          const response = await fetch("http://localhost:4000/info");
          if (!response.ok) {
            throw new Error("Error fetching");
          }
  
          const data = await response.json();
          
          
          
          setNoticiaMain(data[0].noticias);
          setNoticiasData(noticiasRandom(data[0].noticias))
          
          

        } catch (error) {
          console.error("Error fetching data noticias ", error);
        }
      };


      fetchdata();

    }, []);

    
    return (
      <>
          <Header></Header>
          <NoticiaMain noticia={noticiaMain} />
          <Seccion noticias={noticiasData}></Seccion>
          <button className="text-xl border-solid bg-blue-500 text-white rounded-xl h-8 w-24">Acceder</button>

      </>
  )
  
}






export default LandingPage;