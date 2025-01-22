// import React from "react";
import { NavLink } from "react-router";
import css from "./_MobileNav.module.scss";

const MobileNav = ({ pathname, handleOpenNav }) => {
  return (
    <div className={css.mobile_nav}>
      <div className={css.auth_box}>
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
      </div>
      <ul className={css.navigation}>
        <li className={css.nav_item}>
          <NavLink
            className={css.nav_link}
            to="/news"
            onClick={() => handleOpenNav((prev) => !prev)}
          >
            News
          </NavLink>
        </li>
        <li className={css.nav_item}>
          <NavLink
            className={css.nav_link}
            to="/pets"
            onClick={() => handleOpenNav((prev) => !prev)}
          >
            Find Pet
          </NavLink>
        </li>
        <li className={css.nav_item}>
          <NavLink
            className={css.nav_link}
            to="/sponsors"
            onClick={() => handleOpenNav((prev) => !prev)}
          >
            Our Friends
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
