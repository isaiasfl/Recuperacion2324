import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const RootPage = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    )
}

export default RootPage