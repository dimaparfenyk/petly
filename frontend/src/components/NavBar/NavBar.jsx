import Button from "../Button";
import css from "./_NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={css.nav}>
      <div className={css.logo}>
        pe<span>t</span>ly
      </div>
      <ul className={css.nav_list}>
        <li className={`${css.nav_item} ${css.active}`}>
          <a className={css.nav_link} href="/">
            Home
          </a>
        </li>
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
        <Button text={"Login"} />
        <Button text={"Registration"} />
      </div>
    </nav>
  );
};

export default NavBar;
