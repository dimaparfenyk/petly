import { NavLink } from "react-router";
import css from "./_MobileNav.module.scss";
import MobileAuth from "../MobileAuth";

const MobileNav = ({ pathname, handleOpenNav }) => {
  return (
    <div className={css.mobile_nav}>
      <MobileAuth pathname={pathname} handleOpenNav={handleOpenNav} />

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
            to="/pets/sell"
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
