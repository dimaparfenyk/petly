import PetCard from "../PetCard";
import css from "./_PetsList.module.scss";

const PetsList = ({ toggleModal, pets }) => {
  return (
    <ul className={css.pets_list}>
      {pets.map((pet) => (
        <PetCard key={pet._id} pet={pet} onClick={() => toggleModal(pet._id)} />
      ))}
    </ul>
  );
};

export default PetsList;
