import Container from "../../components/Container";
import css from "./_HomePage.module.scss";

const HomePage = () => {
  const text = "Take good care of your small pets";
  return (
    <section className={css.hero_section}>
      <Container>
        <h1 className={css.title}>{text}</h1>
      </Container>
    </section>
  );
};

export default HomePage;
