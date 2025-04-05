import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import css from "./_RegisterModal.module.scss";
import { login } from "../../redux/auth/operations";
import AuthRedirectLink from "../AuthRedirectLink/AuthRedirectLink";

const loginSchema = Yup.object({
  email: Yup.string().trim().required("Type your email"),
  password: Yup.string()
    .trim()
    .min(6, "Min 6 symbols")
    .max(16, "Max 16 symbols"),
});

const LoginModal = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
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
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <h2 className={css.form_title}>Login</h2>
            {errors.email && touched.email && <label>{errors.email}</label>}
            <Field
              placeholder="Email"
              name="email"
              className={css.auth_field}
            />
            {errors.password && touched.password && (
              <label>{errors.password}</label>
            )}
            <Field
              placeholder="Password"
              name="password"
              className={css.auth_field}
            />
            <div className={css.btn_box}>
              <Button type="submit" text={"Login"} isActive />
            </div>

            <AuthRedirectLink text={["Don't have an account?", "Register"]} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginModal;
