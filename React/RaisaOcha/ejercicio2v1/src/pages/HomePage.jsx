import AddVehicleForm from "../components/AddVehicleForm"
import NavBar from "../components/NavBar"

const HomePage = () => {
  return (
  <>
    <NavBar />
    <div className="felx flex-col">
      <AddVehicleForm />
    </div>
  </>
  )
}

export default HomePage