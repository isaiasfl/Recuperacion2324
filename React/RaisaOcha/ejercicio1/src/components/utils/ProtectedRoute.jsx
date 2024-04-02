import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/useAuthContext";

const ProtectedRoute = ({ redirectPath }) => {
  const { userFirebase } = useAuthContext();
  const isActive = !!userFirebase;
  if (!isActive) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
