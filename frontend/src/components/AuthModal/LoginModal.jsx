import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import Button from "../Button";
import css from "./_RegisterModal.module.scss";
import { login } from "../../redux/auth/operations";
import AuthRedirectLink from "../AuthRedirectLink/AuthRedirectLink";

const LoginModal = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "denis@gmail.com",
    password: "123456",
  };

  const handleSubmit = async (values, actions) => {
    const body = new FormData();

    body.append("email", values.email);
    body.append("password", values.password);

    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <div className={css.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <h2 className={css.form_title}>Login</h2>

          <Field placeholder="Email" name="email" className={css.auth_field} />
          <Field
            placeholder="Password"
            name="password"
            className={css.auth_field}
          />
          <Button type="submit" text={"Login"} isActive={true} />
          <AuthRedirectLink text={["Don't have an account?", "Register"]} />
        </Form>
      </Formik>
    </div>
  );
};

export default LoginModal;
