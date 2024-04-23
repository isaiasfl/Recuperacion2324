const arrayObj= [
    {
        nombre: "Rafa",
        edad:20,
    },
    {
        nombre: "Comino",
        edad: 21,
    },
    {
        nombre: "Ruben",
        edad:22
    }
]

const ordenarPorPropiedad = (array, propiedad) =>{
    if(typeof array[0][propiedad]==="number"){
        array[propiedad].sort((a,b)=>{
            return a-b
        })

    }
    if(typeof array[0][propiedad]==="string"){

    }
    
}