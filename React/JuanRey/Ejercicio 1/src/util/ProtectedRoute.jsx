import { Navigate, Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";

const ProtectedRoute = ({redirectPath}) => {
    const { userFirebase } = AuthProvider();
    const isActive = !!userFirebase ;

    if(!isActive){
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
};

export default ProtectedRoute;