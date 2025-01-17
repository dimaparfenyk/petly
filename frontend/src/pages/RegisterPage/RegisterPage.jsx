import AuthModal from "../../components/AuthModal";
import css from "./_RegisterPage.module.scss";

const RegisterPage = () => {
  return (
    <section className={css.section}>
      <AuthModal />
    </section>
  );
};

export default RegisterPage;
