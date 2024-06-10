import React, { createContext, useState, useEffect } from 'react';

const RoomContext = createContext();

const RoomProvider = ({ children }) => {
    const [rooms, setRooms] = useState([]);
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        // Load data from localStorage
        const storedRooms = JSON.parse(localStorage.getItem('rooms')) || [];
        const storedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
        setRooms(storedRooms);
        setReservations(storedReservations);
        
        // Load data from db.json
        const loadFromDB = async () => {
            try {
                const res = await fetch('http://localhost:4000/rooms');
                const roomsData = await res.json();
                setRooms(roomsData);
                
                const resReservations = await fetch('http://localhost:4000/reservations');
                const reservationsData = await resReservations.json();
                setReservations(reservationsData);
            } catch (error) {
                console.error('Error loading data from db.json', error);
            }
        };
        loadFromDB();
    }, []);

    useEffect(() => {
        // Save data to localStorage
        localStorage.setItem('rooms', JSON.stringify(rooms));
        localStorage.setItem('reservations', JSON.stringify(reservations));
    }, [rooms, reservations]);

    const addRoom = async (room) => {
        setRooms([...rooms, room]);
        try {
            await fetch('http://localhost:4000/rooms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(room)
            });
        } catch (error) {
            console.error('Error saving new room to db.json', error);
        }
    };

    const reserveRoom = async (reservation) => {
        setReservations([...reservations, reservation]);
        try {
            await fetch('http://localhost:4000/reservations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reservation)
            });
        } catch (error) {
            console.error('Error saving new reservation to db.json', error);
        }
    };

    const cancelReservation = async (reservationId) => {
        setReservations(reservations.filter(res => res.id !== reservationId));
        try {
            await fetch(`http://localhost:4000/reservations/${reservationId}`, {
                method: 'DELETE'
            });
        } catch (error) {
            console.error('Error deleting reservation from db.json', error);
        }
    };

    const getClientReservations = (clientId) => {
        return reservations.filter(res => res.clientId === clientId);
    };

    const getAvailableRooms = () => {
        const reservedRoomIds = reservations.map(res => res.roomId);
        return rooms.filter(room => !reservedRoomIds.includes(room.id));
    };

    return (
        <RoomContext.Provider value={{
            rooms,
            reservations,
            addRoom,
            reserveRoom,
            cancelReservation,
            getClientReservations,
            getAvailableRooms
        }}>
            {children}
        </RoomContext.Provider>
    );
};

export { RoomContext, RoomProvider };
