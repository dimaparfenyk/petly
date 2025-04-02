import { Field } from "formik";
import css from "./_AddUserPetForm.module.scss";
import Button from "../Button";

const FirstStepForm = ({ onClose, setStep, touched, errors }) => {
  return (
    <>
      <>
        <label htmlFor="name" className={css.label}>
          Pet name
        </label>
        <Field
          id="name"
          name="name"
          placeholder="Type pet name"
          className={css.form_field}
        />
        {touched.name && errors.name && (
          <div className={css.error}>{errors.name}</div>
        )}
        <label htmlFor="birth" className={css.label}>
          Date of birth:
        </label>
        <Field
          id="birth"
          name="birth"
          type="date"
          max={new Date().toISOString().split("T")[0]}
          placeholder="Type date of birth"
          className={`${css.form_field} ${css.date_field}`}
        />
        {touched.birth && errors.birth && (
          <div className={css.error}>{errors.birth}</div>
        )}
      </>
      <label htmlFor="breed" className={css.label}>
        Breed
      </label>
      <Field
        id="breed"
        name="breed"
        placeholder="Type breed"
        className={`${css.form_field} ${css.last_field}`}
      />
      {touched.breed && errors.breed && (
        <div className={css.error}>{errors.breed}</div>
      )}
      <div className={css.btn_box}>
        <Button type="button" onClick={() => onClose()}>
          Cancel
        </Button>
        <Button type="button" onClick={() => setStep(2)} isActive={true}>
          Next
        </Button>
      </div>
    </>
  );
};

export default FirstStepForm;
