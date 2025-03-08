import RegisterModal from "../../components/AuthModal";
import css from "./_RegisterPage.module.scss";

const RegisterPage = () => {
  return (
    <section className={css.section}>
      <RegisterModal />
    </section>
  );
};

export default RegisterPage;
