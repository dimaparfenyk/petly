import Button from "../Button";
import { FaHeart } from "react-icons/fa6";
import css from "./_PetDetail.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCurPet, selectFavoritePets } from "../../redux/pets/selectors";
import { selectToken, selectUser } from "../../redux/auth/selectors";
import { toggleFavoritePet } from "../../redux/pets/operations";
import { getUserDetails } from "../../redux/auth/operations";
import { useEffect } from "react";

const PetDetails = ({ petId }) => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const { city, phone, email: userEmail } = useSelector(selectUser);
  const pet = useSelector(selectCurPet(petId));
  const favorites = useSelector(selectFavoritePets);

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

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

  const handleFavoriteToggle = () => {
    dispatch(toggleFavoritePet({ token, petId }));
  };

  const isFavorite = favorites.some((favPet) => favPet._id === petId);

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
                {owner.city || city}
              </div>
              <div className={css.meta_block}>
                <p className={css.meta_text}>The sex:</p>
                {sex}
              </div>
              <div className={css.meta_block}>
                <p className={css.meta_text}>Email:</p>
                {owner.email || userEmail}
              </div>
              <div className={css.meta_block}>
                <p className={css.meta_text}>Phone:</p>
                {owner.phone || phone}
              </div>
              {price && (
                <div className={css.meta_block}>
                  <p className={css.meta_text}>Sell:</p>
                  {price} ₴
                </div>
              )}
            </div>
          </div>

          <div className={css.comments_text}>
            <span>Comments: </span>
            {comments}
          </div>
        </div>
        <div className={css.btn_box}>
          <Button
            isActive
            text={isFavorite ? "Remove from" : "Add to"}
            onClick={() => handleFavoriteToggle()}
          >
            <FaHeart />
          </Button>
          <Button text={"Contact"} />
        </div>
      </div>
    )
  );
};

export default PetDetails;
