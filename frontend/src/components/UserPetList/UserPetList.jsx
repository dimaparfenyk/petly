import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import UserPetItem from "../UserPetItem";
import css from "./_UserPetList.module.scss";

const UserPetList = () => {
  const [pets, setPets] = useState([1, 2]);

  const handleAddPet = () => {
    setPets((prev) => [...prev, 3]);
    console.log(pets);
  };

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
        {pets.map((pet) => {
          return <UserPetItem key={pet} pet={pet} />;
        })}
      </ul>
    </div>
  );
};

export default UserPetList;
