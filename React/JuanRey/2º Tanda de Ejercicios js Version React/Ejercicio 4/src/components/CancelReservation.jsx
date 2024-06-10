import React, { useState, useContext } from 'react';
import { RoomContext } from '../contexts/RoomContext';

const CancelReservation = () => {
    const { cancelReservation } = useContext(RoomContext);
    const [reservationId, setReservationId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        cancelReservation(reservationId);
        setReservationId('');
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Cancelar Reserva</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="reservationId">ID de Reserva</label>
                    <input
                        type="text"
                        id="reservationId"
                        value={reservationId}
                        onChange={(e) => setReservationId(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="ID de Reserva"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Cancelar Reserva</button>
            </form>
        </div>
    );
};

export default CancelReservation;
