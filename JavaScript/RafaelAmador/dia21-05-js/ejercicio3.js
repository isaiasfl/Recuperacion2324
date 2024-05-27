const biblioteca = [
    {nombre: "AAA", autor:"AAA", prestado: false},
    {nombre: "BBB", autor:"AAA", prestado: false},
    {nombre: "CCC", autor:"BBB", prestado: false},
    {nombre: "VVV", autor:"BBB", prestado: false},
    {nombre: "XXX", autor:"AAA", prestado: false},
    {nombre: "DDD", autor:"MMM", prestado: false},
]

const addLibro = (name, author) =>{
    let libroRepetido=0;
    biblioteca.forEach((libro)=>{
        if(libro.nombre==name){
            libroRepetido+=1
        }
    })
    if(libroRepetido===0){
        biblioteca.push({nombre: name, autor: author, prestado: false})
    }
    console.log(biblioteca);
    return biblioteca
}

const prestarLibro = (name) =>{
    biblioteca.forEach((libro)=>{
        if(libro.nombre==name && libro.prestado==false){
            libro.prestado=true;
        }
    })
    console.log(biblioteca);
    return biblioteca
}
const devolverLibro = (name) =>{
    biblioteca.forEach((libro)=>{
        if(libro.nombre==name && libro.prestado==true){
            libro.prestado=false;
        }
    })
    console.log(biblioteca);
    return biblioteca
}
const buscarLibros = (author) =>{
    const librosPorAutor= []
    biblioteca.forEach((libro)=>{
        if(libro.autor== author){
            librosPorAutor.push(libro)
        }
    })
    console.log(librosPorAutor);
    return librosPorAutor
}
const obtenerLibrosPrestados = ()=>{
    const librosPrestados = [];
    biblioteca.forEach((libro) =>{
        if(libro.prestado){
            librosPrestados.push(libro)
        }
    })
    console.log(librosPrestados);
    return librosPrestados
}
