import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RestrictedRoute = ({ redirectTo, component: Component }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
