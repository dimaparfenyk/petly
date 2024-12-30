import { Link } from "react-router-dom";
// import Button from "../Button";
import css from "./_PetCard.module.scss";

const PetCard = ({ _id }) => {
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
            <Link to={`${_id}`} className={css.pet_details_link}>
              Learn More
            </Link>
          </div>
        </div>
      </article>
    </li>
  );
};

export default PetCard;
