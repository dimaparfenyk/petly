import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ redirectTo, component: Component }) => {
  const { isRefreshing, token } = useAuth();

  return token && !isRefreshing ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
