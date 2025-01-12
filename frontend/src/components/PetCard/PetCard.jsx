import css from "./_PetCard.module.scss";
import Button from "../Button/Button";
import { IoHeartCircleOutline } from "react-icons/io5";

const PetCard = ({ _petId, onClick }) => {
  console.log(_petId);
  return (
    <li className={css.petcard}>
      <article>
        <div className={css.img_box}>
          <img src="/pets/dog.png" alt="pet" className={css.pet_img} />
        </div>
        <div className={css.meta_box}>
          <h2 className={css.card_title}>Cute dog looking for a home</h2>
          <div className={css.meta_text}>
            <span>Breed:</span> Pomeranian
          </div>
          <div className={css.meta_text}>
            <span>Place:</span> Poltava
          </div>
          <div className={css.meta_text}>
            <span>Price:</span> 50$
          </div>
          <div className={css.btn_box}>
            <Button text={"Learn More"} onClick={onClick} />
          </div>
        </div>
      </article>
      <button className={css.add_favorite_btn}>
        <IoHeartCircleOutline />
      </button>
    </li>
  );
};

export default PetCard;
