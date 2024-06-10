import React, { useState, useContext } from 'react';
import { RoomContext } from '../contexts/RoomContext';

const AddRoom = () => {
    const { addRoom } = useContext(RoomContext);
    const [room, setRoom] = useState({ id: '', name: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        addRoom(room);
        setRoom({ id: '', name: '' });
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Añadir Nueva Habitación</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="roomId">ID de Habitación</label>
                    <input
                        type="text"
                        id="roomId"
                        value={room.id}
                        onChange={(e) => setRoom({ ...room, id: e.target.value })}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="ID de Habitación"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="roomName">Nombre de Habitación</label>
                    <input
                        type="text"
                        id="roomName"
                        value={room.name}
                        onChange={(e) => setRoom({ ...room, name: e.target.value })}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Nombre de Habitación"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Añadir Habitación</button>
            </form>
        </div>
    );
};

export default AddRoom;
