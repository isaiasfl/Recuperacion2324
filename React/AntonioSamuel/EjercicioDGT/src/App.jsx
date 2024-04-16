import AltaVehiculo from "./components/AltaVehiculo"
import Header from "./components/Header"
import ShowVehiculos from "./components/ShowVehiculos"

function App() {

  return (
    <div className="m-3">
      <Header />
      <div className="flex flex-row p-2 m-1">
        <div className="flex flex-col w-1/2 mx-1 p-1">
          <AltaVehiculo />
        </div>
        <div className="flex flex-col w-1/2">
          <ShowVehiculos />
        </div>
      </div>
    </div>
  )
}

export default App
