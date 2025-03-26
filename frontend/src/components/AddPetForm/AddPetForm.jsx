import { useState } from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import RadioButtons from "./RadioButtons";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import css from "./_AddPetForm.module.scss";
import * as Yup from "yup";
import { handleSubmit } from "../../utilities";

const AddPetForm = ({ onClose, addEntity, initial }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isFirstForm, setIsFirstForm] = useState(true);
  const [image, setImage] = useState(null);
  const isProfilePage = location.pathname === "/profile";

  const firstStepSchema = Yup.object({
    title: Yup.string().when([], {
      is: () => !isProfilePage,
      then: (schema) =>
        schema
          .min(3, "Минимум 3 символа")
          .max(50, "Максимум 50 символов")
          .required("Введите заголовок"),
    }),
    breed: Yup.string().required("Введите породу"),
    name: Yup.string()
      .trim()
      .min(2, "Минимум 2 символа")
      .max(30, "Максимум 30 символов"),
    birth: Yup.date().nullable().required("Выберите дату рождения"),
  });

  const secondStepSchema = Yup.object({
    sex: Yup.string().oneOf(["male", "female"]).required("Выберите пол"),
    price: Yup.number().when("status", {
      is: (status) => status === "sell",
      then: Yup.number()
        .required("Установите цену")
        .positive("Цена должна быть положительным числом")
        .integer("Цена должна быть целым числом"),
    }),
    comments: Yup.string().max(300, "Максимум 300 символов"),
  });

  const submitOptions = { dispatch, addEntity, onClose, image };

  return (
    <div className={css.wrapper}>
      <h2 className={css.subtitle}>Add Pet</h2>

      <Formik
        initialValues={initial}
        enableReinitialize
        onSubmit={handleSubmit(submitOptions)}
        validationSchema={isFirstForm ? firstStepSchema : secondStepSchema}
      >
        {({ values, touched, errors }) => (
          <Form method="post" className={css.form}>
            {isFirstForm ? (
              <FirstForm
                onClose={onClose}
                changeForm={setIsFirstForm}
                isFirstForm={isFirstForm}
                isProfilePage={isProfilePage}
                status={values.status}
                touched={touched}
                errors={errors}
              >
                {!isProfilePage && <RadioButtons values={values} />}
              </FirstForm>
            ) : (
              <SecondForm
                changeForm={setIsFirstForm}
                setImage={setImage}
                isProfilePage={isProfilePage}
                status={values.status}
                touched={touched}
                errors={errors}
              ></SecondForm>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddPetForm;
