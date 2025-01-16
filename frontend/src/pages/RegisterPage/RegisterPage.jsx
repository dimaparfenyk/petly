import AuthModal from "../../components/AuthModal";
import Container from "../../components/Container";
import css from "./_RegisterPage.module.scss";

const RegisterPage = () => {
  return (
    <section className={css.section}>
      <Container>
        <AuthModal />
      </Container>
    </section>
  );
};

export default RegisterPage;
