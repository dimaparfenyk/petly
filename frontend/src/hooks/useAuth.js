import { useSelector } from "react-redux";
import {
  selectError,
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
  const error = useSelector(selectError);

  return { user, isLoggedIn, isRefreshing, token, error };
};

export default useAuth;
