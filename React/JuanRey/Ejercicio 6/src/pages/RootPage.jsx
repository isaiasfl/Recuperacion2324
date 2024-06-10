import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

export default RootPage;