<<<<<<< HEAD
import { LoginModal } from "../../components/AuthModal";
=======
import LoginModal from "../../components/AuthModal/LoginModal";
>>>>>>> 77a771230dd04676a1739f02f850a47d4e4737ec
import css from "./_LoginPage.module.scss";

const LoginPage = () => {
  return (
    <section className={css.section}>
      <LoginModal />
    </section>
  );
};

export default LoginPage;
