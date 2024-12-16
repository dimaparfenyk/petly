import Container from "../../components/Container";
import css from "./_HomePage.module.scss";

const HomePage = () => {
  const text = "Take good care of your small pets";
  return (
    <Container>
      <section className={css.hero_section}>
        <h1 className={css.title}>{text}</h1>
      </section>
    </Container>
  );
};

export default HomePage;
