import { NavLink } from "react-router";
import css from "./_MobileAuth.module.scss";
import useAuth from "../../hooks/useAuth";

const MobileAuth = ({ pathname, handleOpenNav }) => {
  const { isLoggedIn } = useAuth();
  return (
    <div className={css.auth_box}>
      {!isLoggedIn ? (
        <>
          <NavLink
            to={"login"}
            className={`${css.account_link} ${
              pathname === "/login" ? css.active : ""
            }`}
            onClick={() => handleOpenNav((prev) => !prev)}
          >
            Login
          </NavLink>
          <NavLink
            to={"register"}
            className={`${css.account_link} ${
              pathname === "/register" ? css.active : ""
            }`}
            onClick={() => handleOpenNav((prev) => !prev)}
          >
            Registration
          </NavLink>
        </>
      ) : (
        <NavLink
          to={"profile"}
          className={`${css.account_link} ${isLoggedIn ? css.active : ""}`}
          onClick={() => handleOpenNav((prev) => !prev)}
        >
          Accaunt
        </NavLink>
      )}
    </div>
  );
};

export default MobileAuth;
