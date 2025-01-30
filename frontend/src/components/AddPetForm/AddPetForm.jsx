import { useState } from "react";
import { Formik, Field, Form } from "formik";
import moment from "moment";
import Button from "../Button";
import css from "./_AddPetForm.module.scss";

const AddPetForm = () => {
  const [isFirstForm, setIsFirstForm] = useState(true);
  const [image, setImage] = useState(null);

  return (
    <div className={css.wrapper}>
      <h2 className={css.subtitle}>Add Pet</h2>
      <p className={css.text}>Lorem ipsum dolor sit amet, consectetur</p>
      <div>
        <Button text={"lost/found"} />
        <Button text={"in good hands"} />
        <Button text={"sell"} />
      </div>

      <Formik
        initialValues={{
          title: "",
          name: "",
          birth: "",
          breed: "",
          price: "",
          petImgUrl: "",
          comments: "",
          sex: "male",
        }}
        onSubmit={async (values) => {
          const body = new FormData();

          body.append("title", values.title);
          body.append("name", values.name);
          body.append("birth", moment(values.birth).format("DD-MM-YYYY"));
          body.append("breed", values.breed);
          body.append("price", values.price);
          body.append("comments", values.comments);
          body.append("sex", values.sex);
          body.append("petImgUrl", values.petImgUrl);

          console.log(values);

          await fetch("/api/pets", {
            method: "POST",
            body,
          });
        }}
      >
        {({ setFieldValue }) => (
          <Form method="post">
            {isFirstForm ? (
              <>
                <label htmlFor="title" className={css.label}>
                  Tittle of ad
                </label>
                <Field id="title" name="title" placeholder="Type title" />
                <label htmlFor="name">Pet name</label>
                <Field id="name" name="name" placeholder="Type pet name" />
                <label htmlFor="birth">Date of birth:</label>
                <Field
                  id="birth"
                  name="birth"
                  placeholder="Type date of birth"
                  type="date"
                />
                <label htmlFor="breed">Breed</label>
                <Field id="breed" name="breed" placeholder="Type breed" />

                <button type="button">Cancel</button>
                <button type="button" onClick={() => setIsFirstForm(false)}>
                  Next
                </button>
              </>
            ) : (
              <>
                <fieldset>
                  <legend>The sex:</legend>
                  <Field id="male" name="sex" type="radio" value="male" />
                  <label htmlFor="male" className={css.male_label}>
                    Male
                  </label>
                  <Field id="female" name="sex" type="radio" value="female" />
                  <label htmlFor="female">Female</label>
                </fieldset>

                <label htmlFor="price" className={css.label}>
                  Price
                </label>
                <Field id="price" name="price" placeholder="Type price" />
                <Field as="fieldset">
                  <label>Load the pet’s image:</label>
                  <label htmlFor="petImgUrl" className={css.image_label}>
                    <Field
                      id="petImgUrl"
                      name="petImgUrl"
                      type="file"
                      accept="image"
                      className={css.img_field}
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setImage(URL.createObjectURL(file));
                        setFieldValue("petImgUrl", file);
                      }}
                    />
                    +
                  </label>
                </Field>
                {image && <img src={image} />}
                <label htmlFor="comments">Comments</label>
                <Field
                  id="comments"
                  name="comments"
                  placeholder="Type comment"
                  as="textarea"
                />
                <button type="button" onClick={() => setIsFirstForm(true)}>
                  Back
                </button>
                <button type="submit">Done</button>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddPetForm;
