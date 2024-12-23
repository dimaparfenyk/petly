import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../Button";
import css from "./_NavBar.module.scss";

const NavBar = () => {
  const [activeButton, setActiveButton] = useState("registration");

  const handleButtonClick = (name) => {
    setActiveButton(name);
  };

  return (
    <nav className={css.nav}>
      <a href="/" className={css.logo}>
        pe<span>t</span>ly
      </a>
      <ul className={css.nav_list}>
        <li className={css.nav_item}>
          <a className={css.nav_link} href="/news">
            News
          </a>
        </li>
        <li className={css.nav_item}>
          <a className={css.nav_link} href="/pets">
            Find Pet
          </a>
        </li>
        <li className={css.nav_item}>
          <a className={css.nav_link} href="/sponsors">
            Our Friends
          </a>
        </li>
      </ul>

      <div className={css.nav_auth}>
        <Button
          text={"Login"}
          name="login"
          isActive={activeButton === "login"}
          onClick={() => handleButtonClick("login")}
        />
        <Button
          text={"Registration"}
          name="registration"
          isActive={activeButton === "registration"}
          onClick={() => handleButtonClick("registration")}
        />
      </div>
      <button type="button" className={css.burger_btn}>
        <RxHamburgerMenu className={css.burger} />
      </button>
    </nav>
  );
};

export default NavBar;
