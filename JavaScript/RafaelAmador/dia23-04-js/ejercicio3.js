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
const ordenarPorPropiedad = (array, propiedad) => {
    if (typeof array[0][propiedad] === "number") {
        array.sort((a, b) => {
            return b[propiedad] - a[propiedad];
        });
    }
    if (typeof array[0][propiedad] === "string") {
        array.sort((a, b) => {
            return a[propiedad].toLowerCase().localeCompare(b[propiedad].toLowerCase());
        });
    }
    return array;
};

console.log(ordenarPorPropiedad(arrayObj, "edad"));
console.log(ordenarPorPropiedad(arrayObj, "nombre"));