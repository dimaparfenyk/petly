import { useState } from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import moment from "moment";
import RadioButtons from "./RadioButtons";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import css from "./_AddPetForm.module.scss";

const AddPetForm = ({ onClose, addEntity, initial }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isFirstForm, setIsFirstForm] = useState(true);
  const [image, setImage] = useState(null);
  const isProfilePage = location.pathname === "/profile";

  const handleSubmit = async (values, actions) => {
    const body = new FormData();
    const formattedValues = {
      ...values,
      birth: moment(values.birth).format("DD-MM-YYYY"),
    };

    Object.entries(formattedValues).forEach(([key, value]) => {
      body.append(key, value);
    });

    if (image) {
      body.append("petImgUrl", image);
    }

    dispatch(addEntity(body));
    actions.resetForm();
    onClose();
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.subtitle}>Add Pet</h2>

      <Formik
        initialValues={initial}
        enableReinitialize={true}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form method="post" className={css.form}>
            {isFirstForm ? (
              <FirstForm
                onClose={onClose}
                changeForm={setIsFirstForm}
                isFirstForm={isFirstForm}
                isProfilePage={isProfilePage}
              >
                {!isProfilePage && <RadioButtons />}
              </FirstForm>
            ) : (
              <SecondForm
                changeForm={setIsFirstForm}
                setImage={setImage}
                setFieldValue={setFieldValue}
                isProfilePage={isProfilePage}
              />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddPetForm;
