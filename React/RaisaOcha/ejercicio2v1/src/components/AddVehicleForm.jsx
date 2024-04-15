import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import GenerateRandomPlate from "../helpers/funcionesCrud/GenerateRandomPlate";
import GenerateRandomChassis from "../helpers/funcionesCrud/GenerateRandomChassis";

const AddVehicleForm = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [type, setType] = useState('');
  const [color, setColor] = useState('');
  const [registrationDate, setRegistrationDate] = useState('');
  const [errors, setErrors] = useState({});

    useEffect(() => {
    const today = new Date();
    const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    setRegistrationDate(formattedDate);
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!brand.trim()) {
      errors.brand = 'Marca es requerida';
    }
    if (!model.trim()) {
      errors.model = 'Modelo es requerido';
    }
    if (!type.trim()) {
      errors.type = 'Tipo es requerido';
    }
    if (!color.trim()) {
      errors.color = 'Color es requerido';
    }
    if (!registrationDate.trim()) {
      errors.registrationDate = 'Fecha de registro es requerida';
    }
    if (Object.keys(errors).length > 0) {
      let errorMessage = '<ul>';
      for (const key in errors) {
        errorMessage += `<li>${errors[key]}</li>`;
      }
      errorMessage += '</ul>';
      
      Swal.fire({
        icon: 'error',
        title: 'Error en el formulario',
        html: errorMessage
      });
      return;
    }

    saveToJSON();

    Swal.fire({
      title: 'Información del formulario',
      html: generateModalContent(),
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    })

    setBrand('');
    setModel('');
    setType('');
    setColor('');
    setErrors({});
  };

  const generateModalContent = () => {
    return `
      <p><strong>Número de bastidor:</strong> ${GenerateRandomChassis()}</p>
      <p><strong>Marca:</strong> ${brand}</p>
      <p><strong>Modelo:</strong> ${model}</p>
      <p><strong>Tipo:</strong> ${type}</p>
      <p><strong>Color:</strong> ${color}</p>
      <p><strong>Fecha de registro:</strong> ${registrationDate}</p>
      <p><strong>Matrícula:</strong> ${GenerateRandomPlate()}</p>
    `;
  };

  const saveToJSON = () => {
    const formData = {
      chassis: GenerateRandomChassis(),
      brand,
      model,
      type,
      color,
      registrationDate,
      plate: GenerateRandomPlate()
    };
    const jsonData = JSON.stringify(formData);

    fetch('http://localhost:4000/altas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    })
    .then(response => {
      if (response.ok) {
        console.log('Datos guardados correctamente');
      } else {
        console.error('Error al guardar los datos:', response.status);
      }
    })
    .catch(error => {
      console.error('Error al enviar la solicitud:', error);
    });
  };


  return (
    <div className="container mx-auto p-4 bg-slate-100 rounded">
      <h1 className="text-2xl font-bold mb-4 ">Formulario de Registro de Vehículos</h1>
        <div className="mb-4 ">
          <label className="block text-gray-700 mb-1" htmlFor="numBastidor">
            El numero de bastidor será generado automáticamente
          </label>
        </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="brand">
            Marca
          </label>
          <input
            type="text"
            id="brand"
            className="form-input w-full"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          {errors.brand && <p className="text-red-500">{errors.brand}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="model">
            Modelo
          </label>
          <input
            type="text"
            id="model"
            className="form-input w-full"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          {errors.model && <p className="text-red-500">{errors.model}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="type">
            Tipo
          </label>
          <select
            id="type"
            className="form-select w-full"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Selecciona un tipo</option>
            <option value="motocicleta">Motocicleta</option>
            <option value="coche">Coche</option>
            <option value="camión">Camión</option>
          </select>
          {errors.type && <p className="text-red-500">{errors.type}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="color">
            Color
          </label>
          <input
            type="text"
            id="color"
            className="form-input w-full"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          {errors.color && <p className="text-red-500">{errors.color}</p>}
        </div>
         <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="registrationDate">
            Fecha de registro
          </label>
          <input
            type="text"
            id="registrationDate"
            className="form-input w-full"
            value={registrationDate}
            onChange={(e) => setRegistrationDate(e.target.value)}
            disabled
          />
          {errors.registrationDate && <p className="text-red-500">{errors.registrationDate}</p>}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Registrar Vehículo
        </button>
      </form>
    </div>
  );
};

export default AddVehicleForm;



