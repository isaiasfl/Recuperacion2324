import AltaVehiculo from "./components/AltaVehiculo"
import Header from "./components/Header"
import ShowVehiculos from "./components/ShowVehiculos"

function App() {

  return (
    <div className="m-3 border border-black">
      <Header />
      <div className="flex flex-row p-2 m-1 border border-black">
        <div className="flex flex-col w-1/2 mx-1 p-1 border border-black">
          <AltaVehiculo />
        </div>
        <div className="flex flex-col w-1/2 border border-black">
          <ShowVehiculos />
        </div>
      </div>
    </div>
  )
}

export default App
