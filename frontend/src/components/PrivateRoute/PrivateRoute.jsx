import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ redirectTo, component: Component }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  // const shouldRedirect = !isLoggedIn || !isRefreshing;

  // return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  return !isLoggedIn && !isRefreshing ? (
    <Navigate to={redirectTo} />
  ) : (
    Component
  );
};

export default PrivateRoute;
