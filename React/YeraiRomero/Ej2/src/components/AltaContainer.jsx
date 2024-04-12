import React, { useState, useEffect } from "react";
import AltaCard from "./AltaCard";
const AltaContainer = () => {
  const [altas, setAltas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAltas = async () => {
      const response = await fetch("http://localhost:3001/altas");
      const data = await response.json();
      setAltas(data);
      setLoading(false);
    };

    fetchAltas();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        altas.map((alta) => <AltaCard key={alta.num} {...alta} />)
      )}
    </div>
  );
}
export default AltaContainer;