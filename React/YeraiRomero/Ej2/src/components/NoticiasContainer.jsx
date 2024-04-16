import React, { useState, useEffect } from "react";
import NoticiaCard from "./NoticiaCard";
const NoticiaContainer = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const shuffleNewsAndPick = (n) => {
    let copy = [...news];
    copy.sort(() => Math.random() - 0.5);
    let firstn = copy.slice(0, n);
    return firstn;
  }

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch("http://localhost:3001/noticias");
      const data = await response.json();
      setNews(data);
      setLoading(false);
    };

    fetchNews();
  }, []);

  return (
    <div className="noticias">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        shuffleNewsAndPick(3).map((noticia) => (<NoticiaCard key={noticia.id} {...noticia} />))
      )}
    </div>
  );
}
export default NoticiaContainer;