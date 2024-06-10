const apiUrl = "http://localhost:4000/info";

export async function getImagenes() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        const imagenes = [];

        data.forEach(entry => {
            if (entry.imagenes && Array.isArray(entry.imagenes)) {
                entry.imagenes.forEach(imagen => {
                    imagenes.push(imagen.url);
                });
            }
        });
        
        return imagenes;
    } catch (error) {
        console.error(error);
        return []; 
    }
}