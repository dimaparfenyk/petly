import { useDispatch } from "react-redux";
import { NavLink } from "react-router";
import { Formik, Field, Form } from "formik";
import Button from "../Button";
import css from "./_RegisterModal.module.scss";
import { login } from "../../redux/auth/operations";

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
          <div className={css.box}>
            <Field
              placeholder="Email"
              name="email"
              className={css.auth_field}
            />
            <Field
              placeholder="Password"
              name="password"
              className={css.auth_field}
            />
          </div>

          <Button type="submit" text={"Login"} isActive={true} />

          <p className={css.text}>
            Don&apos;t have an account?
            <NavLink className={css.redirect_link} to={"/register"}>
              Register
            </NavLink>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginModal;
