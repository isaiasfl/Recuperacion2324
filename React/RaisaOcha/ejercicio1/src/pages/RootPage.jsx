import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootPage = () => {
  return (
    <>
      
      <Outlet />
      <Footer />
    </>
  );
};

export default RootPage;
