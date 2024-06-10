const apiUrl="http://localhost:4000/info";

const noticiasMap = new Map();

export async function getNoticias() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        data.forEach(entry => {
            if (entry.noticias) {
                const noticias = entry.noticias;
                noticias.forEach(noticia => {
                    noticiasMap.set(noticia.idnoticia, noticia);
                });
            }
        });
        
        return noticiasMap;
    } catch (error) {
        console.error(error);
    }
}