import css from "./_AddUserPetForm.module.scss";
import Button from "../Button";
import { handleNext } from "../../utilities";
import FormField from "./FormField";

const FirstStepForm = ({
  onClose,
  setStep,
  errors,
  touched,
  setTouched,
  validateForm,
}) => {
  return (
    <>
      <FormField
        id="name"
        name="name"
        placeholder="Pet name"
        errors={errors.name}
        touched={touched.name}
        isValid={!errors.name && touched.name}
      />
      <FormField
        id="birth"
        name="birth"
        type="date"
        placeholder="Date of birth"
        errors={errors.birth}
        touched={touched.birth}
        max={new Date().toISOString().split("T")[0]}
        isValid={!errors.birth && touched.birth}
      />
      <FormField
        id="breed"
        name="breed"
        placeholder="Breed"
        errors={errors.breed}
        touched={touched.breed}
        isValid={!errors.breed && touched.breed}
      />
      <div className={css.btn_box}>
        <Button type="button" onClick={() => onClose()}>
          Cancel
        </Button>
        <Button
          type="button"
          onClick={() => handleNext(validateForm, setTouched, setStep)}
          isActive
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default FirstStepForm;
