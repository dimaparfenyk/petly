import { useState } from "react";
import { Formik, Field, Form } from "formik";
import moment from "moment";
import Button from "../Button";
import css from "./_AddPetForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectStatusFilter } from "../../redux/filters/selectors";
import statusFilters from "../../redux/constants";
import { setStatusFilters } from "../../redux/filters/filtersSlice";
import { addPet } from "../../redux/pets/operations";

const AddPetForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  const [isFirstForm, setIsFirstForm] = useState(true);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = async (values, actions) => {
    const body = new FormData();

    body.append("title", values.title);
    body.append("name", values.name);
    body.append("birth", moment(values.birth).format("DD-MM-YYYY"));
    body.append("breed", values.breed);
    body.append("price", values.price);
    body.append("comments", values.comments);
    body.append("sex", values.sex);
    body.append("petImgUrl", image);
    body.append("status", values.status);

    dispatch(addPet(body));
    actions.resetForm();
    onClose();
  };

  const handleFilterChange = (filter) => dispatch(setStatusFilters(filter));

  return (
    <div className={css.wrapper}>
      <h2 className={css.subtitle}>Add Pet</h2>
      <p className={css.text}>
        Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
        consectetur.
      </p>
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
          status: filter,
        }}
        enableReinitialize={true}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form method="post" className={css.form}>
            {isFirstForm ? (
              <>
                <div
                  role="group"
                  aria-labelledby="status-group"
                  className={css.status_group}
                >
                  <label>
                    <Field
                      type="radio"
                      name="status"
                      value="lost_found"
                      checked={filter === statusFilters.lost_found}
                      onChange={() =>
                        handleFilterChange(statusFilters.lost_found)
                      }
                      className={css.petStatus_radio}
                    />
                    <div className={css.pet_status}>Lost/Found</div>
                  </label>

                  <label>
                    <Field
                      type="radio"
                      name="status"
                      value="in_good_hands"
                      checked={filter === statusFilters.for_free}
                      onChange={() =>
                        handleFilterChange(statusFilters.for_free)
                      }
                      className={css.petStatus_radio}
                    />
                    <div className={css.pet_status}>In good hands</div>
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="status"
                      value="sell"
                      checked={filter === statusFilters.sell}
                      onChange={() => handleFilterChange(statusFilters.sell)}
                      className={css.petStatus_radio}
                    />
                    <div className={css.pet_status}>Sell</div>
                  </label>
                </div>
                <label
                  htmlFor="title"
                  className={`${css.label} ${css.label_required}`}
                >
                  Tittle of ad
                </label>
                <Field
                  id="title"
                  name="title"
                  placeholder="Type title"
                  className={css.form_field}
                />
                <label htmlFor="name" className={css.label}>
                  Pet name
                </label>
                <Field
                  id="name"
                  name="name"
                  placeholder="Type pet name"
                  className={css.form_field}
                />
                <label htmlFor="birth" className={css.label}>
                  Date of birth:
                </label>
                <Field
                  id="birth"
                  name="birth"
                  type="date"
                  placeholder="Type date of birth"
                  pattern="^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)[0-9]{2}$"
                  title="Birthday should be in format dd.mm.yyyy"
                  className={`${css.form_field} ${css.date_field}`}
                />
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
                  <Button
                    type="button"
                    onClick={() => setIsFirstForm(false)}
                    isActive={true}
                  >
                    Next
                  </Button>
                </div>
              </>
            ) : (
              <>
                <fieldset className={css.fieldset}>
                  <legend className={css.legend}>The sex:</legend>
                  <div className={css.sex_box}>
                    <label htmlFor="male" className={css.sex_label}>
                      <Field
                        id="male"
                        name="sex"
                        type="radio"
                        value="male"
                        className={`${css.form_field} ${css.sex_field}`}
                      />
                      <div className={css.radio_btn_label}>
                        <img
                          src="/sex-male.png"
                          alt="Male"
                          className={css.sex_img}
                        />
                        <span className={css.sex_label_text}>Male</span>
                      </div>
                    </label>

                    <label htmlFor="female" className={css.sex_label}>
                      <Field
                        id="female"
                        name="sex"
                        type="radio"
                        value="female"
                        className={`${css.form_field} ${css.sex_field}`}
                      />
                      <div className={css.radio_btn_label}>
                        <img
                          src="/sex-female.png"
                          alt="Female"
                          className={css.sex_img}
                        />
                        <span className={css.sex_label_text}>Female</span>
                      </div>
                    </label>
                  </div>
                </fieldset>

                {filter === statusFilters.sell && (
                  <>
                    <label
                      htmlFor="price"
                      className={`${css.label} ${css.label_required}`}
                    >
                      Price
                    </label>
                    <Field
                      id="price"
                      name="price"
                      placeholder="Type price"
                      className={css.form_field}
                    />
                  </>
                )}
                {image ? (
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
                        accept="image"
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
                )}
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
                <div className={css.btn_box}>
                  <Button type="button" onClick={() => setIsFirstForm(true)}>
                    Back
                  </Button>
                  <Button type="submit" isActive={true}>
                    Done
                  </Button>
                </div>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddPetForm;
