import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Formik, Field, Form } from "formik";
import Button from "../Button";
import css from "./_RegisterModal.module.scss";
import { register } from "../../redux/auth/operations";
import AuthRedirectLink from "../AuthRedirectLink/AuthRedirectLink";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const RegisterModal = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isFirstRegStep, setIsFirstRegStep] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (isRegistered && user.email) {
      navigate("/login");
    }
  }, [isRegistered, user.email, navigate]);

  const initialValues = {
    email: "denis@gmail.com",
    name: "denis",
    password: "123456",
    city: "Rome",
    phone: "+380991212123",
  };

  const handleSubmit = async (values, actions) => {
    const body = new FormData();

    body.append("email", values.email);
    body.append("name", values.name);
    body.append("password", values.password);
    body.append("city", values.city);
    body.append("phone", values.phone);

    await dispatch(register(values)).unwrap();
    setIsRegistered(true);

    actions.resetForm();
  };

  return (
    <div className={css.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <h2 className={css.form_title}>Registration</h2>

          {isFirstRegStep && (
            <>
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
              <Field
                placeholder="Confirm password"
                name="password"
                className={css.auth_field}
              />
              <Button
                type="button"
                text={"Next"}
                isActive
                onClick={() => setIsFirstRegStep(false)}
              />
            </>
          )}
          {!isFirstRegStep && (
            <>
              <Field
                placeholder="Name"
                name="name"
                className={css.auth_field}
              />
              <Field
                placeholder="City, region"
                name="city"
                className={css.auth_field}
              />
              <Field
                placeholder="Mobile phone"
                name="phone"
                className={css.auth_field}
              />
              <Button type="submit" text={"Register"} isActive />
            </>
          )}
          <AuthRedirectLink text={["Already have an account?", "Login"]} />
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterModal;
