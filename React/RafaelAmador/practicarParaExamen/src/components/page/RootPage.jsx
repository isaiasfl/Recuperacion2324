import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const RootPage = () => {
  return (
    <>
    <Header />
    <hr />
    <Outlet />
    <hr />
    <Footer />
    </>
  )
}

export default RootPage