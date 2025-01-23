import PetCard from "../PetCard";
import css from "./_PetsList.module.scss";

const PetsList = ({ toggleModal }) => {
  return (
    <ul className={css.pets_list}>
      <PetCard _petId={"1"} onClick={() => toggleModal("1")} />
      <PetCard _petId={"2"} onClick={() => toggleModal("2")} />
      <PetCard _petId={"3"} onClick={() => toggleModal("3")} />
      <PetCard _petId={"4"} onClick={() => toggleModal("4")} />
      <PetCard _petId={"5"} onClick={() => toggleModal("5")} />
      <PetCard _petId={"6"} onClick={() => toggleModal("6")} />
      <PetCard _petId={"7"} onClick={() => toggleModal("7")} />
      <PetCard _petId={"8"} onClick={() => toggleModal("8")} />
    </ul>
  );
};

export default PetsList;
