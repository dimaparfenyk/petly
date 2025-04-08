import Button from "../Button";
import css from "./_AddUserPetForm.module.scss";
import ImageDownloader from "../ImageDownLoader/ImageDownloader";
import FormField from "./FormField";

const SecondStepForm = ({ setStep, setImage, errors, touched }) => {
  return (
    <>
      <ImageDownloader setImage={setImage} />
      <FormField
        id="comments"
        name="comments"
        placeholder="Type comment"
        as="textarea"
        rows="1"
        errors={errors.comments}
        touched={touched.comments}
        isValid={!errors.comments && touched.comments}
      />
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
