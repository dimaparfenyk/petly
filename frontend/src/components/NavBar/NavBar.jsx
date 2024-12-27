import { useState } from "react";
import { useLocation } from "react-router";

import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../Button";
import css from "./_NavBar.module.scss";

const NavBar = () => {
  const { pathname } = useLocation();

  const [activeButton, setActiveButton] = useState("registration");
  const [activePage, setActivePage] = useState(
    () => pathname.replace("/", "") || "/"
  );

  return (
    <nav className={css.nav}>
      <a href="/" className={css.logo}>
        pe<span>t</span>ly
      </a>
      <ul className={css.nav_list}>
        <li
          className={`${css.nav_item} ${
            activePage === "news" ? css.active : ""
          }`}
          onClick={() => setActivePage("news")}
        >
          <a className={css.nav_link} href="/news">
            News
          </a>
        </li>
        <li
          className={`${css.nav_item} ${
            activePage === "pets" ? css.active : ""
          }`}
          onClick={() => setActivePage("pets")}
        >
          <a className={css.nav_link} href="/pets">
            Find Pet
          </a>
        </li>
        <li
          className={`${css.nav_item} ${
            activePage === "sponsors" ? css.active : ""
          }`}
          onClick={() => setActivePage("sponsors")}
        >
          <a className={css.nav_link} href="/sponsors">
            Our Friends
          </a>
        </li>
      </ul>

      <div className={css.nav_auth}>
        <Button
          text={"Login"}
          isActive={activeButton === "login"}
          onClick={() => setActiveButton("login")}
        />
        <Button
          text={"Registration"}
          isActive={activeButton === "registration"}
          onClick={() => setActiveButton("registration")}
        />
      </div>
      <button type="button" className={css.burger_btn}>
        <RxHamburgerMenu className={css.burger} />
      </button>
    </nav>
  );
};

export default NavBar;
