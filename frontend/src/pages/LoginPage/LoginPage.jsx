import LoginModal from "../../components/AuthModal/LoginModal";
import css from "./_LoginPage.module.scss";

const LoginPage = () => {
  return (
    <section className={css.section}>
      <LoginModal />
    </section>
  );
};

export default LoginPage;
