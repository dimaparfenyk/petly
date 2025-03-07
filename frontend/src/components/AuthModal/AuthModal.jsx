import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router";
import { Formik, Field, Form } from "formik";
import Button from "../Button";
import css from "./_AuthModa.module.scss";
import { register } from "../../redux/auth/operations";

const AuthModal = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [isFirstRegStep, setIsFirstRegStep] = useState(
    () => pathname === "/register"
  );

  const isRegisterPath = pathname === "/register";
  const redirectAuthLink = isRegisterPath ? "/login" : "/register";
  const titleText = isRegisterPath ? "registration" : pathname.slice(1);
  const text = isRegisterPath ? "Already" : "Don't";

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
    dispatch(register(values));

    actions.resetForm();
    // onClose();
  };

  return (
    <div className={css.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <h2 className={css.form_title}>{titleText}</h2>
          <div className={css.box}>
            {!isRegisterPath && (
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
              </>
            )}
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
              </>
            )}
            {!isFirstRegStep && isRegisterPath && (
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
              </>
            )}
          </div>

          {isFirstRegStep && (
            <Button
              type="button"
              text={"Next"}
              isActive={true}
              onClick={() => setIsFirstRegStep(false)}
            />
          )}

          {!isFirstRegStep && pathname === "/register" && (
            <Button type="submit" text={titleText} isActive={true} />
          )}

          {!isRegisterPath && (
            <Button type="submit" text={titleText} isActive={true} />
          )}

          <p className={css.text}>
            {text} have an account?
            <NavLink to={redirectAuthLink} className={css.redirect_link}>
              {redirectAuthLink.slice(1)}
            </NavLink>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default AuthModal;
