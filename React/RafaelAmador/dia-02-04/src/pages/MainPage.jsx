import Form from "../components/Form"
import Header from "../components/Header"
import ListaVehiculos from "../components/ListaVehiculos"

const MainPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
      <Header />
      
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div style={{ width: "45%", marginRight: "20px" }}>
          <Form />
        </div>
        <div style={{ width: "45%", marginLeft: "20px", borderLeft: "1px solid #ccc", paddingLeft: "20px" }}>
          <ListaVehiculos />
        </div>
      </div>
    </div>
  )
}

export default MainPage