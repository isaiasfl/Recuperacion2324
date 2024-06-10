import React, { useState, useContext } from 'react';
import { RoomContext } from '../contexts/RoomContext';

const ClientReservations = () => {
    const { getClientReservations } = useContext(RoomContext);
    const [clientId, setClientId] = useState('');
    const [reservations, setReservations] = useState([]);

    const handleSearch = () => {
        setReservations(getClientReservations(clientId));
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Reservas del Cliente</h2>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="clientId">ID del Cliente</label>
                <input
                    type="text"
                    id="clientId"
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="ID del Cliente"
                    required
                />
            </div>
            <button onClick={handleSearch} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Obtener Reservas</button>
            <ul className="mt-4">
                {reservations.map(res => (
                    <li key={res.id} className="border-b py-2">{res.roomId}</li>
                ))}
            </ul>
        </div>
    );
};

export default ClientReservations;
