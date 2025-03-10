import { LoginModal } from "../../components/AuthModal";
import css from "./_LoginPage.module.scss";

const LoginPage = () => {
  return (
    <section className={css.section}>
      <LoginModal />
    </section>
  );
};

export default LoginPage;
