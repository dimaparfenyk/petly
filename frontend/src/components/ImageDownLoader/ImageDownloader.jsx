import { useState, useEffect } from "react";
import { Field, useFormikContext } from "formik";
import css from "./_ImageDownLoader.module.scss";

const ImageDownloader = ({ setImage }) => {
  const { values, setFieldValue } = useFormikContext();
  const [imagePreview, setImagePreview] = useState(
    values.petImgPreview || null
  );
  useEffect(() => {
    if (values.petImgPreview) {
      setImagePreview(values.petImgPreview);
    }
  }, [values.petImgPreview]);

  const handleChange = (e) => {
    const { files } = e.currentTarget;
    if (files && files[0]) {
      const previewUrl = URL.createObjectURL(files[0]);
      setImagePreview(previewUrl);
      setImage(files[0]);
      setFieldValue("petImgPreview", previewUrl);
    }
  };

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
          onChange={handleChange}
        />
        +
      </label>
    </Field>
  );
};

export default ImageDownloader;
