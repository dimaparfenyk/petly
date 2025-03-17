import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { IoLogOutOutline } from "react-icons/io5";
import css from "./_LogOutBtn.module.scss";

const LogOutBtn = () => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className={css.logout_btn}
      onClick={() => dispatch(logOut())}
    >
      <IoLogOutOutline />
      Log Out
    </button>
  );
};

export default LogOutBtn;
