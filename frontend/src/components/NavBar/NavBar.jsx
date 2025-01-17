import { NavLink, useLocation } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiAccountCircleFill } from "react-icons/ri";
import css from "./_NavBar.module.scss";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.logo}>
        pe<span>t</span>ly
      </NavLink>
      <ul className={css.nav_list}>
        <li
          className={`${css.nav_item} ${
            pathname === "/news" ? css.active : ""
          }`}
        >
          <NavLink className={css.nav_link} to="/news">
            News
          </NavLink>
        </li>
        <li
          className={`${css.nav_item} ${
            pathname === "/pets" ? css.active : ""
          }`}
        >
          <NavLink className={css.nav_link} to="/pets">
            Find Pet
          </NavLink>
        </li>
        <li
          className={`${css.nav_item} ${
            pathname === "/sponsors" ? css.active : ""
          }`}
        >
          <NavLink className={css.nav_link} to="/sponsors">
            Our Friends
          </NavLink>
        </li>
      </ul>

      <div className={css.nav_auth}>
        <NavLink
          to={"login"}
          className={`${css.account_link} ${
            pathname === "/login" ? css.active : ""
          }`}
        >
          Login
        </NavLink>
        <NavLink
          to={"register"}
          className={`${css.account_link} ${
            pathname === "/register" ? css.active : ""
          }`}
        >
          Registration
        </NavLink>

        {/* {pathname === "/profile" && ( */}
        <NavLink
          to="profile"
          className={`${css.account_link} ${
            pathname === "/profile" ? css.active : ""
          }`}
        >
          <RiAccountCircleFill />
          Account
        </NavLink>
        {/* )} */}
      </div>
      <button type="button" className={css.burger_btn}>
        <RxHamburgerMenu className={css.burger} />
      </button>
    </nav>
  );
};

export default NavBar;
