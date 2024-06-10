import React, { useContext } from 'react';
import { RoomContext } from '../contexts/RoomContext';

const AvailableRooms = () => {
    const { availableRooms } = useContext(RoomContext);

    return (
        <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Habitaciones Disponibles</h2>
            <ul>
                {availableRooms().map(room => (
                    <li key={room.id} className="border-b py-2">{room.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AvailableRooms;
