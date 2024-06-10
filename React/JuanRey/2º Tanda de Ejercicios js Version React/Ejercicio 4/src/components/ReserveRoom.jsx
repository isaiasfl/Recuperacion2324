import React, { useState, useContext } from 'react';
import { RoomContext } from '../contexts/RoomContext';

const ReserveRoom = () => {
    const { reserveRoom, rooms } = useContext(RoomContext);
    const [reservation, setReservation] = useState({ id: '', clientId: '', roomId: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        reserveRoom(reservation);
        setReservation({ id: '', clientId: '', roomId: '' });
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Reservar Habitación</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="reservationId">ID de Reserva</label>
                    <input
                        type="text"
                        id="reservationId"
                        value={reservation.id}
                        onChange={(e) => setReservation({ ...reservation, id: e.target.value })}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="ID de Reserva"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="clientId">ID del Cliente</label>
                    <input
                        type="text"
                        id="clientId"
                        value={reservation.clientId}
                        onChange={(e) => setReservation({ ...reservation, clientId: e.target.value })}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="ID del Cliente"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="roomId">Habitación</label>
                    <select
                        id="roomId"
                        value={reservation.roomId}
                        onChange={(e) => setReservation({ ...reservation, roomId: e.target.value })}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        required
                    >
                        <option value="">Seleccionar Habitación</option>
                        {rooms.map(room => (
                            <option key={room.id} value={room.id}>{room.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Reservar Habitación</button>
            </form>
        </div>
    );
};

export default ReserveRoom;
