import { useDispatch } from "react-redux";
import { deleteUserPet } from "../../redux/userPets/operations";
import { HiMiniTrash } from "react-icons/hi2";
import css from "./_UserPetItem.module.scss";

const UserPetItem = ({ pet }) => {
  const dispatch = useDispatch();
  const { name, petImgUrl, _id, birth, breed, comments } = pet;
  const imgSrc =
    petImgUrl !== "pet-avatar.png" ? petImgUrl : "./pets/pet-avatar.png";

  return (
    <li className={css.pet_item}>
      <div className={css.img_box}>
        <img src={imgSrc} alt={`pet${name}`} className={css.pet_avatar} />
      </div>
      <div className={css.meta_box}>
        <div className={css.meta_text}>
          <span>Name:</span> {name}
          <button
            type="button"
            className={css.remove_btn}
            onClick={() => {
              dispatch(deleteUserPet(_id));
            }}
          >
            <HiMiniTrash />
          </button>
        </div>
        <div className={css.meta_text}>
          <span>Date of birth:</span> {birth}
        </div>
        <div className={css.meta_text}>
          <span>Breed:</span> {breed}
        </div>
        <div className={css.meta_text}>
          <span>Comments:</span> {comments}
        </div>
      </div>
    </li>
  );
};

export default UserPetItem;
