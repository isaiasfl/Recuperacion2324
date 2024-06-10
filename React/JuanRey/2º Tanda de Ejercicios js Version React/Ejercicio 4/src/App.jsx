import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RoomProvider } from './contexts/RoomContext';
import HomePage from './pages/HomePage';
import AddRoomPage from './pages/AddRoomPage';
import ReserveRoomPage from './pages/ReserveRoomPage';
import CancelReservationPage from './pages/CancelReservationPage';
import ClientReservationsPage from './pages/ClientReservationsPage';
import AvailableRoomsPage from './pages/AvaibleRoomsPage';
import Header from './components/Header';

function App() {
    return (
        <RoomProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/add-room" element={<AddRoomPage />} />
                    <Route path="/reserve-room" element={<ReserveRoomPage />} />
                    <Route path="/cancel-reservation" element={<CancelReservationPage />} />
                    <Route path="/client-reservations" element={<ClientReservationsPage />} />
                    <Route path="/available-rooms" element={<AvailableRoomsPage />} />
                </Routes>
            </Router>
        </RoomProvider>
    );
}

export default App;
