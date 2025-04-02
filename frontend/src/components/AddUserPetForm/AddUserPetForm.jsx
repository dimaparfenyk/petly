import { useState } from "react";
import { Formik, Form } from "formik";
import css from "./_AddUserPetForm.module.scss";
import FirstStepForm from "./FirstStepForm";
import SecondStepForm from "./SecondStepForm";
import { addUserPetSchema, handleSubmit } from "../../utilities";
import { useDispatch } from "react-redux";

const AddUserPetForm = ({ onClose, addPet, initial }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [step, setStep] = useState(1);

  const submitOptions = { dispatch, addPet, onClose, image };

  return (
    <div className={css.wrapper}>
      <h2 className={css.subtitle}>Add Pet</h2>
      <Formik
        initialValues={initial}
        enableReinitialize
        onSubmit={handleSubmit(submitOptions)}
        validationSchema={
          step === 1
            ? addUserPetSchema.firstStepSchema
            : addUserPetSchema.secondStepSchema
        }
      >
        {({ values, touched, errors }) => (
          <Form method="post" className={css.form}>
            {step === 1 ? (
              <FirstStepForm
                onClose={onClose}
                setStep={setStep}
                touched={touched}
                errors={errors}
              />
            ) : (
              <SecondStepForm
                onClose={onClose}
                setStep={setStep}
                setImage={setImage}
                touched={touched}
                errors={errors}
                values={values}
              />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddUserPetForm;
