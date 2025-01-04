import Button from "../Button";
import { IoMdHeart } from "react-icons/io";
import css from "./_PetDetail.module.scss";

const PetDetails = ({ petId }) => {
  console.log(petId);
  return (
    <div className={css.pet_details}>
      <div className={css.pet_meta}>
        <div className={css.pet_img_box}>
          <img src="/pets/dog.png" alt="pet" />
        </div>
        <div className={css.pet_meta_info}>
          <h3 className={css.card_title}>Сute dog looking for a home</h3>
          <div className={css.meta_block}>
            <p className={css.meta_text}>Name:</p>
            <p className={css.meta_text}>Rich</p>
          </div>
          <div className={css.meta_block}>
            <p className={css.meta_text}>Birthday:</p>
            <p className={css.meta_text}>21.09.2020</p>
          </div>
          <div className={css.meta_block}>
            <p className={css.meta_text}>Breed:</p>
            <p className={css.meta_text}>Pomeranian</p>
          </div>
          <div className={css.meta_block}>
            <p className={css.meta_text}>Place:</p>
            <p className={css.meta_text}>Lviv</p>
          </div>
          <div className={css.meta_block}>
            <p className={css.meta_text}>The sex:</p>
            <p className={css.meta_text}>male</p>
          </div>
          <div className={css.meta_block}>
            <p className={css.meta_text}>Email:</p>
            <p className={css.meta_text}>user@mail.com</p>
          </div>
          <div className={css.meta_block}>
            <p className={css.meta_text}>Phone:</p>
            <p className={css.meta_text}>+380971234567</p>
          </div>
          <div className={css.meta_block}>
            <p className={css.meta_text}>Sell:</p>
            <p className={css.meta_text}>150$</p>
          </div>
        </div>
        <p className={css.comments_text}>
          <span>Comments: </span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>
      <div className={css.btn_box}>
        <Button text={"Contact"} />
        <Button text={"Add to"}>
          <IoMdHeart />
        </Button>
      </div>
    </div>
  );
};

export default PetDetails;
