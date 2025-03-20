import { HiMiniTrash } from "react-icons/hi2";
import css from "./_UserPetItem.module.scss";
import { useDispatch } from "react-redux";
import { deleteUserPet } from "../../redux/userPets/operations";

const UserPetItem = ({ pet }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.pet_item}>
      <div className={css.img_box}>
        <img
          src={`./user/pets/${pet.petImgUrl}`}
          alt={`pet${pet.name}`}
          className={css.pet_avatar}
        />
      </div>
      <div className={css.meta_box}>
        <div className={css.meta_text}>
          <span>Name:</span> {pet.name}
          <button
            type="button"
            className={css.remove_btn}
            onClick={() => {
              dispatch(deleteUserPet(pet._id));
            }}
          >
            <HiMiniTrash />
          </button>
        </div>
        <div className={css.meta_text}>
          <span>Date of birth:</span> {pet.birth}
        </div>
        <div className={css.meta_text}>
          <span>Breed:</span> {pet.breed}
        </div>
        <div className={css.meta_text}>
          <span>Comments:</span> {pet.comments}
        </div>
      </div>
    </li>
  );
};

export default UserPetItem;
