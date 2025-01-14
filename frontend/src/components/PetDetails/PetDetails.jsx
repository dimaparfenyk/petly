import Button from "../Button";
import { FaRegHeart } from "react-icons/fa";
import css from "./_PetDetail.module.scss";

const PetDetails = ({ petId }) => {
  console.log(petId);
  return (
    <div className={css.pet_details}>
      <div className={css.pet_meta}>
        <div className={css.inner_wrapper}>
          <div className={css.pet_img_box}>
            <img className={css.pet_img} src="/pets/dog.png" alt="pet" />
            <div className={css.label_box}>sell</div>
          </div>
          <div className={css.pet_meta_info}>
            <h3 className={css.card_title}>Cute dog looking for a home</h3>
            <div className={css.meta_block}>
              <p className={css.meta_text}>Name:</p>
              Rich
            </div>
            <div className={css.meta_block}>
              <p className={css.meta_text}>Birthday:</p>
              21.09.2020
            </div>
            <div className={css.meta_block}>
              <p className={css.meta_text}>Breed:</p>
              Pomeranian
            </div>
            <div className={css.meta_block}>
              <p className={css.meta_text}>Place:</p>
              Lviv
            </div>
            <div className={css.meta_block}>
              <p className={css.meta_text}>The sex:</p>
              male
            </div>
            <div className={css.meta_block}>
              <p className={css.meta_text}>Email:</p>
              user@mail.com
            </div>
            <div className={css.meta_block}>
              <p className={css.meta_text}>Phone:</p>
              +380971234567
            </div>
            <div className={css.meta_block}>
              <p className={css.meta_text}>Sell:</p>
              150$
            </div>
          </div>
        </div>
        <div className={css.comments_text}>
          <span>Comments: </span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </div>
      </div>
      <div className={css.btn_box}>
        <Button text={"Add to"}>
          <FaRegHeart />
        </Button>
        <Button text={"Contact"} />
      </div>
    </div>
  );
};

export default PetDetails;
