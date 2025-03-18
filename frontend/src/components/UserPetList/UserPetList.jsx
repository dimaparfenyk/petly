import { useSelector } from "react-redux";
import { selectUserPets } from "../../redux/auth/selectors";
import { IoIosAdd } from "react-icons/io";
import UserPetItem from "../UserPetItem";
import css from "./_UserPetList.module.scss";

const UserPetList = ({ handleAddPet }) => {
  const pets = useSelector(selectUserPets);
  console.log(pets);

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
        {pets.map((pet, index) => {
          return <UserPetItem key={index} pet={pet} />;
        })}
      </ul>
    </div>
  );
};

export default UserPetList;
