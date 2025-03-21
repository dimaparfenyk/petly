import { useState } from "react";
import { Field } from "formik";
import css from "./_AddPetForm.module.scss";

const ImageDownloader = ({ setFieldValue, setImage }) => {
  const [imagePreview, setImagePreview] = useState(null);

  return imagePreview ? (
    <div
      className={css.image_box}
      style={{ backgroundImage: `url(${imagePreview})` }}
    ></div>
  ) : (
    <Field as="fieldset" className={css.fieldset}>
      <label className={css.label}>Load the pet’s image:</label>
      <label htmlFor="petImgUrl" className={css.image_label}>
        <Field
          id="petImgUrl"
          name="petImgUrl"
          type="file"
          accept="image/*"
          className={css.img_field}
          onChange={(e) => {
            const { files } = e.currentTarget;
            if (files) {
              setImage(files[0]);
              setImagePreview(URL.createObjectURL(files[0]));
              setFieldValue("petImgUrl", files[0]);
            }
          }}
        />
        +
      </label>
    </Field>
  );
};

export default ImageDownloader;
