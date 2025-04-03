import { Field } from "formik";
import css from "./_AddUserPetForm.module.scss";
import Button from "../Button";

const FirstStepForm = ({
  onClose,
  setStep,
  errors,
  setTouched,
  validateForm,
}) => {
  const handleNext = async () => {
    const validationErrors = await validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setTouched(
        Object.keys(validationErrors).reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {})
      );
      return;
    }

    setStep(2);
  };
  return (
    <>
      <label htmlFor="name" className={css.label}>
        Pet name
      </label>
      {<div className={css.error}>{errors.name}</div>}
      <Field
        id="name"
        name="name"
        placeholder="Type pet name"
        className={css.form_field}
      />
      <label htmlFor="birth" className={css.label}>
        Date of birth:
      </label>
      <div className={css.error}>{errors.birth}</div>
      <Field
        id="birth"
        name="birth"
        type="date"
        max={new Date().toISOString().split("T")[0]}
        placeholder="Type date of birth"
        className={`${css.form_field} ${css.date_field}`}
      />
      <label htmlFor="breed" className={css.label}>
        Breed
      </label>
      <div className={css.error}>{errors.breed}</div>
      <Field
        id="breed"
        name="breed"
        placeholder="Type breed"
        className={`${css.form_field} ${css.last_field}`}
      />
      <div className={css.btn_box}>
        <Button type="button" onClick={() => onClose()}>
          Cancel
        </Button>
        <Button type="button" onClick={() => handleNext()} isActive>
          Next
        </Button>
      </div>
    </>
  );
};

export default FirstStepForm;
