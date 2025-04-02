import { Field } from "formik";
import Button from "../Button";
import css from "./_AddUserPetForm.module.scss";
import ImageDownloader from "../ImageDownLoader/ImageDownloader";

const SecondStepForm = ({ setStep, ...restProps }) => {
  const { setImage, touched, errors } = restProps;
  return (
    <>
      <ImageDownloader setImage={setImage} />
      <label htmlFor="comments" className={css.label}>
        Comments
      </label>
      <Field
        id="comments"
        name="comments"
        placeholder="Type comment"
        as="textarea"
        rows="1"
        className={`${css.form_field} ${css.textarea}`}
      />
      {touched.comments && errors.comments && (
        <div className={css.error}>{errors.comments}</div>
      )}
      <div className={css.btn_box}>
        <Button type="button" onClick={() => setStep(1)}>
          Back
        </Button>
        <Button type="submit" isActive>
          Done
        </Button>
      </div>
    </>
  );
};

export default SecondStepForm;
