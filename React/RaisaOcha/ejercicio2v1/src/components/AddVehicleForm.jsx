import { useState } from "react";
import Swal from 'sweetalert2';

const AddVehicleForm = () => {
  const [numBastidor, setNumBastidor] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [type, setType] = useState('');
  const [color, setColor] = useState('');
  const [registrationDate, setRegistrationDate] = useState('');

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!numBastidor.trim()) {
      errors.numBastidor = 'Número de bastidor es requerido';
    }
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
      setErrors(errors);
      return;
    }
    const modalContent = `
      <p><strong>Número de bastidor:</strong> ${numBastidor}</p>
      <p><strong>Marca:</strong> ${brand}</p>
      <p><strong>Modelo:</strong> ${model}</p>
      <p><strong>Tipo:</strong> ${type}</p>
      <p><strong>Color:</strong> ${color}</p>
      <p><strong>Fecha de registro:</strong> ${registrationDate}</p>
    `;
    Swal.fire({
      title: 'Información del formulario',
      html: modalContent,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    })

    setNumBastidor('');
    setBrand('');
    setModel('');
    setType('');
    setColor('');
    setRegistrationDate('');
    setErrors({});
  };

  return (
    <div className="container mx-auto p-4 bg-slate-100 rounded">
      <h1 className="text-2xl font-bold mb-4 ">Formulario de Registro de Vehículos</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 ">
          <label className="block text-gray-700 mb-1" htmlFor="numBastidor">
            Número de bastidor
          </label>
          <input
            type="text"
            id="numBastidor"
            className="form-input w-full"
            value={numBastidor}
            onChange={(e) => setNumBastidor(e.target.value)}
          />
          {errors.numBastidor && <p className="text-red-500">{errors.numBastidor}</p>}
        </div>
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
            type="date"
            id="registrationDate"
            className="form-input w-full"
            value={registrationDate}
            onChange={(e) => setRegistrationDate(e.target.value)}
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

export default AddVehicleForm



