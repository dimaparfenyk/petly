<<<<<<< HEAD
import { RegisterModal } from "../../components/AuthModal";
=======
import RegisterModal from "../../components/AuthModal";
>>>>>>> 77a771230dd04676a1739f02f850a47d4e4737ec
import css from "./_RegisterPage.module.scss";

const RegisterPage = () => {
  return (
    <section className={css.section}>
      <RegisterModal />
    </section>
  );
};

export default RegisterPage;
