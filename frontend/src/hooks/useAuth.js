import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectToken,
  selectUser,
} from "../redux/auth/selectors";

const useAuth = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return { user, isLoggedIn, isRefreshing, token };
};

export default useAuth;
