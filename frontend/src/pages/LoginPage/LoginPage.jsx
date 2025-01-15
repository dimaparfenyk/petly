import AuthModal from "../../components/AuthModal";
import Container from "../../components/Container";
import css from "./_LoginPage.module.scss";

const LoginPage = () => {
  return (
    <section className={css.section}>
      <Container>
        <AuthModal title={"Login"}></AuthModal>
      </Container>
    </section>
  );
};

export default LoginPage;
