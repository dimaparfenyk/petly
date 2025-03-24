import { Field, ErrorMessage } from "formik";
import css from "./_AddPetForm.module.scss";
import Button from "../Button";

const FirstForm = ({ children, ...restProps }) => {
  const { changeForm, onClose, isProfilePage, status } = restProps;

  return (
    <>
      {!isProfilePage && (
        <p className={css.text}>
          Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
          consectetur.
        </p>
      )}
      {children}
      {!isProfilePage && (
        <>
          <label
            htmlFor="title"
            className={`${css.label} ${css.label_required}`}
          >
            Title of ad
          </label>
          <Field
            id="title"
            name="title"
            placeholder="Type title"
            className={css.form_field}
          />
        </>
      )}
      {status !== "lost/found" && (
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
          <ErrorMessage name="name" component="div" className="error" />
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
          />{" "}
        </>
      )}
      <label htmlFor="breed" className={css.label}>
        Breed
      </label>
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
        <Button type="button" onClick={() => changeForm(false)} isActive={true}>
          Next
        </Button>
      </div>
    </>
  );
};

export default FirstForm;
