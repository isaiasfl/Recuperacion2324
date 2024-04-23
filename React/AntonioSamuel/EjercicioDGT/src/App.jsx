// import AltaVehiculo from "./components/AltaVehiculo"
// import Header from "./components/Header"
// import ShowVehiculos from "./components/ShowVehiculos"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

function App() {

  return (
    <div className="m-3">
      {/* <Header />
      <div className="flex flex-row p-2 m-1">
        <div className="flex flex-col w-1/2 mx-1 p-1">
          <AltaVehiculo />
        </div>
        <div className="flex flex-col w-1/2">
          <ShowVehiculos />
        </div>
      </div> */}
      <LandingPage />
      <LoginPage />
      <RegisterPage />
    </div>
  )
}

export default App
