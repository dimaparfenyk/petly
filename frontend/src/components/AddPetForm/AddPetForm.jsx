import { useState } from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import RadioButtons from "./RadioButtons";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import css from "./_AddPetForm.module.scss";
import { handleSubmit, schema } from "../../utilities";

const AddPetForm = ({ onClose, addPet, initial }) => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [image, setImage] = useState(null);
  const submitOptions = { dispatch, addPet, onClose, image };

  return (
    <div className={css.wrapper}>
      <h2 className={css.subtitle}>Add Pet</h2>

      <Formik
        initialValues={initial}
        enableReinitialize
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={handleSubmit(submitOptions)}
        validationSchema={
          step === 1 ? schema.firstStepSchema : schema.secondStepSchema
        }
      >
        {({ values, setTouched, validateForm, errors, touched }) => (
          <Form method="post" className={css.form}>
            {step === 1 ? (
              <FirstForm
                onClose={onClose}
                setStep={setStep}
                setTouched={setTouched}
                validateForm={validateForm}
                touched={touched}
                errors={errors}
              >
                <RadioButtons values={values} />
              </FirstForm>
            ) : (
              <SecondForm
                setStep={setStep}
                setImage={setImage}
                status={values.status}
                errors={errors}
                touched={touched}
              />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddPetForm;
