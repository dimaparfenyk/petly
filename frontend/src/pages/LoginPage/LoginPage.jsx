import AuthModal from "../../components/AuthModal";

import css from "./_LoginPage.module.scss";

const LoginPage = () => {
  return (
    <section className={css.section}>
      <AuthModal />
    </section>
  );
};

export default LoginPage;
