import { useDispatch, useSelector } from "react-redux";
import css from "./_PetCard.module.scss";
import Button from "../Button/Button";
import { FaRegHeart } from "react-icons/fa6";
import { selectToken } from "../../redux/auth/selectors";
import { toggleFavoritePet } from "../../redux/pets/operations";

const PetCard = ({ pet = {}, onClick }) => {
  const { petImgUrl, status, title, breed, price, owner = {} } = pet;
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const handleFavoriteToggle = () => {
    dispatch(toggleFavoritePet({ token, petId: pet._id }));
  };

  return (
    <li className={css.petcard}>
      <article className={css.article}>
        <div className={css.img_box}>
          <img src={petImgUrl} alt="pet image" className={css.pet_img} />
          <div className={css.label_box}>{status}</div>
        </div>
        <div className={css.meta_box}>
          <h2 className={css.card_title}>{title}</h2>
          <div className={css.meta_text}>
            <span>Breed:</span> {breed}
          </div>
          <div className={css.meta_text}>
            <span>Place:</span> {owner.city}
          </div>
          <div className={css.meta_text}>
            <span>Price:</span> {price}₴
          </div>
          <div className={css.btn_box}>
            <Button text={"Learn More"} onClick={onClick} />
          </div>
        </div>
      </article>
      <button className={css.add_favorite_btn} onClick={handleFavoriteToggle}>
        <FaRegHeart />
      </button>
    </li>
  );
};

export default PetCard;
