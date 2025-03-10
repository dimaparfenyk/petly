import Container from "../Container";
import NavBar from "../NavBar";
import css from "./_Header.module.scss";

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <NavBar />
      </Container>
    </header>
  );
};

export default Header;
