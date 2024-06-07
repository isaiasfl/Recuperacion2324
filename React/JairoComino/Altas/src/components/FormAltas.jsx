import { useState } from "react"
import Swal from "sweetalert2";
import getdata from "../helpers/getdata";
import generarMatricula from "../helpers/generarmatriculas";
import obtenerFechaActual from "../helpers/generadorfechas";
import nbastidoraletorio from "../helpers/nbastidoraleatorio";

// nºvastidor,marca,stock ,tipo(motocicleta,coche,camion),color,fecha de alta

const FormAltas = () => {
    const [nbastidor, setNBastidor] = useState("");
    const [marca, setMarca] = useState("");
    const [stock, setstock] = useState("");
    const [tipo, setTipo] = useState("motocicleta");
    const [color, setColor] = useState("");
    let matriculaAleatoria="";
    let fechaactual= "";


    ///logica
    // Función para comprobar si el número de bastidor está repetido en el array
    function tieneRepetidosbastidores(array, numeroBastidor) {
    const numBastidores = array && array.map(item => item.nbastidor);
    console.log(numBastidores);
    console.log(numBastidores.includes(numeroBastidor));
    return numBastidores.includes(numeroBastidor);
    }
    // Función para comprobar si la matricla  está  en el array
    function tieneRepetidosmatriculas(array, matriculaAleatoria) {
        const matriculas = array && array.map(item => item.matricula);
        console.log(matriculas.includes(matriculaAleatoria));
        return matriculas.includes(matriculaAleatoria);
    }


   
  
    
const handleSubmit=async(e)=>{
  e.preventDefault();
    try {
        
    
            const data=await getdata("http://localhost:4000/altas");

  if (tieneRepetidosbastidores(data, nbastidor)==true) {
    
    console.log("El número de bastidor está repetido.");
  } else {
    console.log(tieneRepetidosbastidores);
         matriculaAleatoria=generarMatricula();
     if (tieneRepetidosmatriculas(data, matriculaAleatoria)==true){
         matriculaAleatoria=generarMatricula()

     }
     if (nbastidor==""&&marca==""&&stock==""&&tipo==""&&color=="") {
     
      Swal.fire({
        icon: "error",
        title: `¡Inserción incorreta`,
        text: `Datos del veiculo vacios :
        `
      }); 

       console.log("campos vacios");
       
     }else{
      fechaactual=obtenerFechaActual()
     const newALta={
      nbastidor:nbastidor,
      marca:marca,
      stock:stock,
      tipo:tipo,
      color:color,
      fecha:fechaactual,
      matricula:matriculaAleatoria
  };
  console.log(newALta);

     

    // Realizar la solicitud POST al endpoint "altas"
    fetch('http://localhost:4000/altas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newALta)
    })
    .then(response => {
      if (response.ok) {
      
           
        Swal.fire({
          icon: "success",
          title: `¡Inserción correcta!    Matricula asignada :${matriculaAleatoria}`,
          text: `Datos del veiculo insertados correctamente :
          Datos: 
          NºBastidor: ${nbastidor},
          Marca:${marca},
          stock:${stock},
          Tipo:${tipo},
          Color:${color}
          `
        }); 
        
        // Limpiar el estado del formulario si la solicitud es exitosa
        setNBastidor("");
        setMarca("");
        setstock("");
        setTipo("");
        setColor("");
      } else {
        console.log("Error fech");
        throw new Error('Error al agregar objeto');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error al agregar objeto');
    });

    Swal.fire({
      title: `Matricula asignada: ${matriculaAleatoria}`,
   
      icon: 'warning',
      html: `
      <strong>Datos:</strong><br>
     <h2> Nº Bastidor:<b> ${nbastidor}</b></h2>
     <p>
      Marca: <b>${marca}</b><br>
      stock:<b> ${stock}</b><br>
      Tipo:<b> ${tipo}</b><br>
      Color:<b> ${color}</b></p>`,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch('http://localhost:4000/altas', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
          body: JSON.stringify(newALta)
        })
        Swal.fire({
          title: "Datos aceptados",
          icon: "success"
        });
        setNBastidor("");
        setMarca("");
        setstock("");
        setTipo("");
        setColor("");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        setNBastidor("");
            setMarca("");
            setstock("");
            setTipo("");
            setColor("");
      }
    });
     
  }
}
  
} catch (error) {
        console.log(error);
    }
}
const handlebastidor=(e)=>{
  e.preventDefault();
  setNBastidor(nbastidoraletorio());
}
  return (
    <>
    <div className="max-w-md mx-auto bg-white  shadow-lg  rounded px-8 pt-9 pb-8 mb-4">
  <form >
    <div className="mb-4">
    <label htmlFor="Bastidor" className="block text-gray-700 text-sm font-bold mb-2">Bastidor:</label>
      <input type="text" id="Bastidor" name="Bastidor" value={nbastidor} readOnly={true} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      <button onClick={handlebastidor} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline text-xs">Generar bastidor</button>
    </div>
    <div className="mb-4">
      <label htmlFor="marca" className="block text-gray-700 text-sm font-bold mb-2">Marca:</label>
      <input type="text" id="marca" name="marca" value={marca} onChange={(e) => setMarca(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <div className="mb-4">
      <label htmlFor="stock" className="block text-gray-700 text-sm font-bold mb-2">stock:</label>
      <input type="text" id="stock" name="stock" value={stock} onChange={(e) => setstock(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <div className="mb-4">
      <label htmlFor="tipo" className="block text-gray-700 text-sm font-bold mb-2">Tipo:</label>
      <select id="motivo" name="motivo" value={tipo} onChange={(e) => setTipo(e.target.value)} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${tipo === 'motocicleta' ? 'text-gray-500' : tipo === 'coche' ? 'text-blue-500' : 'text-green-500'}`}>
        <option className="text-gray-800 " value="motocicleta">motocicleta</option>
        <option className="text-blue-800 "  value="coche">coche</option>
        <option className="text-amber-900 "  value="camion">camion</option>
      </select>
    </div>
    <div className="mb-4">
      <label htmlFor="color" className="block text-gray-700 text-sm font-bold mb-2">Color:</label>
      <input type="text" id="color" name="color" value={color} onChange={(e) => setColor(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    
    <button type="submit"  onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
  </form>
</div>

  </>
  )
}

export default FormAltas