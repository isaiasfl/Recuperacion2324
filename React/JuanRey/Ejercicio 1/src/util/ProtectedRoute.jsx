import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ redirectPath, isAuthenticated, ...props }) => {
  if (isAuthenticated) {
    return <Route {...props} />;
  } else {
    return <Navigate to={redirectPath} />;
  }
};

export default ProtectedRoute