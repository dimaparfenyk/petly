import Button from "../Button";
import { FaRegHeart } from "react-icons/fa";
import css from "./_PetDetail.module.scss";
import { useSelector } from "react-redux";
import { selectCurPet } from "../../redux/pets/selectors";

const PetDetails = ({ petId }) => {
  const pet = useSelector(selectCurPet(petId));

  const {
    petImgUrl,
    status,
    title,
    name,
    birth,
    breed,
    owner = {},
    sex,
    price,
    comments,
  } = pet;

  return (
    pet && (
      <div className={css.pet_details}>
        <div className={css.pet_meta}>
          <div className={css.inner_wrapper}>
            <div className={css.pet_img_box}>
              <img className={css.pet_img} src={petImgUrl} alt="pet image" />
              <div className={css.label_box}>{status}</div>
            </div>
            <div className={css.pet_meta_info}>
              <h3 className={css.card_title}>{title}</h3>
              <div className={css.meta_block}>
                <p className={css.meta_text}>Name:</p>
                {name}
              </div>
              <div className={css.meta_block}>
                <p className={css.meta_text}>Birthday:</p>
                {birth}
              </div>
              <div className={css.meta_block}>
                <p className={css.meta_text}>Breed:</p>
                {breed}
              </div>
              <div className={css.meta_block}>
                <p className={css.meta_text}>Place:</p>
                {owner.city}
              </div>
              <div className={css.meta_block}>
                <p className={css.meta_text}>The sex:</p>
                {sex}
              </div>
              <div className={css.meta_block}>
                <p className={css.meta_text}>Email:</p>
                {owner.email}
              </div>
              <div className={css.meta_block}>
                <p className={css.meta_text}>Phone:</p>
                {owner.phone}
              </div>
              <div className={css.meta_block}>
                <p className={css.meta_text}>Sell:</p>
                {price} ₴
              </div>
            </div>
          </div>

          <div className={css.comments_text}>
            <span>Comments: </span>
            {comments}
          </div>
        </div>
        <div className={css.btn_box}>
          <Button text={"Add to"}>
            <FaRegHeart />
          </Button>
          <Button text={"Contact"} />
        </div>
      </div>
    )
  );
};

export default PetDetails;
