import { useDispatch, useSelector } from "react-redux";
import { selectMyPets } from "../../redux/userPets/selectors";
import { IoIosAdd } from "react-icons/io";
import UserPetItem from "../UserPetItem";
import css from "./_UserPetList.module.scss";
import { useEffect } from "react";
import { getUserPets } from "../../redux/userPets/operations";

const UserPetList = ({ handleAddPet }) => {
  const dispatch = useDispatch();
  const pets = useSelector(selectMyPets);

  useEffect(() => {
    dispatch(getUserPets());
  }, [dispatch]);

  return (
    <div className={css.list_box}>
      <div className={css.list_header}>
        <h3 className={css.subtitle}>My pets:</h3>
        <button type="button" className={css.add_btn} onClick={handleAddPet}>
          Add Pet
          <IoIosAdd />
        </button>
      </div>

      <ul>
        {pets && pets.map((pet) => <UserPetItem key={pet._id} pet={pet} />)}
      </ul>
    </div>
  );
};

export default UserPetList;
