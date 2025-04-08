import { useEffect } from "react";
import css from "./_AddPetForm.module.scss";
import Button from "../Button";
import InputField from "./InputField";

const FirstForm = ({ children, ...restProps }) => {
  const { setStep, onClose, errors, touched, setTouched, validateForm } =
    restProps;

  useEffect(() => {
    const keys = Object.keys(errors);
    if (keys.length > 0) {
      const field = document.querySelector(`[name="${keys[0]}"]`);
      if (field) {
        field.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [errors]);

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
      <p className={css.text}>
        Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
        consectetur.
      </p>
      {children}
      <InputField
        id="title"
        name="title"
        placeholder="Title of ad"
        errors={errors.title}
        touched={touched.title}
        className={css.label_required}
      />
      <InputField
        id="name"
        name="name"
        placeholder="Pet name"
        errors={errors.name}
        touched={touched.name}
      />
      <InputField
        id="birth"
        name="birth"
        placeholder="Date of birth"
        type="date"
        errors={errors.birth}
        touched={touched.birth}
        max={new Date().toISOString().split("T")[0]}
        className={css.date_field}
      />

      <InputField
        id="breed"
        name="breed"
        placeholder="Breed"
        errors={errors.breed}
        touched={touched.breed}
        className={css.last_field}
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

export default FirstForm;
