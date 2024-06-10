import Footer from "../components/Footer"
import Header from "../components/Header"
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