import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from "react-router-dom"
const RootPage = () => {
  return (
    <div>
      <Header />
      <hr />
      <Outlet />
      <hr />
      <Footer />
    </div>
  )
}

export default RootPage