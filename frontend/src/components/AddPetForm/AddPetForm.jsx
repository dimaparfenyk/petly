import { useState } from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import RadioButtons from "./RadioButtons";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import css from "./_AddPetForm.module.scss";
import { addPetSchema, handleSubmit } from "../../utilities";
// import { handleSubmit, addPetSchema } from "../../utilities";

const AddPetForm = ({ onClose, addEntity, initial }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isFirstForm, setIsFirstForm] = useState(true);
  const [image, setImage] = useState(null);
  const isProfilePage = location.pathname === "/profile";

  const submitOptions = { dispatch, addEntity, onClose, image };

  return (
    <div className={css.wrapper}>
      <h2 className={css.subtitle}>Add Pet</h2>

      <Formik
        initialValues={initial}
        enableReinitialize={true}
        // validationSchema={addPetSchema}
        onSubmit={handleSubmit(submitOptions)}
      >
        {({ setFieldValue, values }) => (
          <Form method="post" className={css.form}>
            {isFirstForm ? (
              <FirstForm
                onClose={onClose}
                changeForm={setIsFirstForm}
                isFirstForm={isFirstForm}
                isProfilePage={isProfilePage}
                status={values.status}
              >
                {!isProfilePage && (
                  <RadioButtons setFieldValue={setFieldValue} values={values} />
                )}
              </FirstForm>
            ) : (
              <SecondForm
                changeForm={setIsFirstForm}
                setImage={setImage}
                setFieldValue={setFieldValue}
                isProfilePage={isProfilePage}
                status={values.status}
              />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddPetForm;
