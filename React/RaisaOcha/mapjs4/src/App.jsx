
import './App.css'
import NavBar from './components/NavBar'
// import NotificationForm from './components/NotificationForm'
// import NotificationList from './components/NotificationList'
// import UnreadNotificationList from './components/UnreadNotificationList'
import { NotificationProvider } from './context/NotificationContext'
import MainPage from './pages/MainPage'

function App() {

  return (
    <>
          <NavBar />
    <NotificationProvider>
          <MainPage />
    </NotificationProvider>
    </>
  )
}

export default App
