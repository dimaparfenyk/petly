import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import Button from "../Button";
import css from "./_RegisterModal.module.scss";
import { register } from "../../redux/auth/operations";
import AuthRedirectLink from "../AuthRedirectLink/AuthRedirectLink";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { handleNext } from "../../utilities";

const firstStepSchema = Yup.object({
  name: Yup.string().trim().required("Name is required"),
  email: Yup.string().email().trim().required("Email is required"),
  password: Yup.string()
    .trim()
    .min(6, "Min 6 symbols")
    .max(16, "Max 16 symbols")
    .required("Password is required"),
});

const secondStepSchema = Yup.object({
  city: Yup.string().trim().required("Location is required"),
  phone: Yup.string().trim().required("Phone is required"),
});

const RegisterModal = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (isRegistered && user.email) {
      navigate("/login");
    } else {
      setStep(1);
    }
  }, [user.email, navigate, isRegistered]);

  const initialValues = {
    email: "viktoria1996@gmail.com",
    name: "viktoria",
    password: "123456",
    city: "Rome",
    phone: "0668264096",
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
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={step === 1 ? firstStepSchema : secondStepSchema}
      >
        {({ errors, touched, validateForm, setTouched }) => (
          <Form className={css.form}>
            <h2 className={css.form_title}>Registration</h2>

            {step === 1 ? (
              <>
                {errors.name && touched.name && <label>{errors.name}</label>}
                <Field
                  placeholder="Type your name..."
                  name="name"
                  className={css.auth_field}
                />
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
                  <Button
                    type="button"
                    text={"Next"}
                    isActive
                    onClick={() =>
                      handleNext(validateForm, setTouched, setStep)
                    }
                  />
                </div>
              </>
            ) : (
              <>
                {errors.city && touched.city && <label>{errors.city}</label>}
                <Field
                  placeholder="Type your city..."
                  name="city"
                  className={css.auth_field}
                />
                {errors.phone && touched.phone && <label>{errors.phone}</label>}
                <Field
                  placeholder="Type your mobile..."
                  name="phone"
                  className={css.auth_field}
                />
                <div className={css.btn_box}>
                  <Button
                    type="button"
                    text={"Back"}
                    onClick={() => setStep(1)}
                  />
                  <Button type="submit" text={"Register"} isActive />
                </div>
              </>
            )}
            <AuthRedirectLink text={["Already have an account?", "Login"]} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterModal;
