import { useState } from "react";
import { useSelector } from "react-redux";
import { selectStatusFilter } from "../../redux/filters/selectors";
import {
  selectAllPets,
  selectFavoritePets,
  selectIsLoading,
} from "../../redux/pets/selectors";
import PetItem from "../PetItem";
import NoContentBlock from "../../components/NoContentBlock";
import ModalManager from "../ModalManager";
import Spinner from "../../components/Spinner";

import css from "./_PetsList.module.scss";
import useFilteredPets from "../../hooks/useFilteredPets";

const PetsList = () => {
  const status = useSelector(selectStatusFilter);
  const isLoading = useSelector(selectIsLoading);
  const pets = useSelector(selectAllPets);
  const favoritePets = useSelector(selectFavoritePets);
  const [showModal, setShowModal] = useState(false);
  const [curId, setCurId] = useState(null);

  const toggleModal = () => setShowModal((prev) => !prev);

  const filteredPets = useFilteredPets(pets, favoritePets, status);

  const isPetsData = !isLoading && filteredPets.length > 0;

  if (isLoading) return <Spinner loading={isLoading} />;

  return (
    <>
      {isPetsData ? (
        <ul className={css.pets_list}>
          {filteredPets.map((pet) => (
            <PetItem
              key={pet._id}
              pet={pet}
              onClick={() => {
                setCurId(pet._id);
                setShowModal(true);
              }}
            />
          ))}
        </ul>
      ) : (
        <NoContentBlock toggleModal={toggleModal} />
      )}

      {showModal && <ModalManager curId={curId} toggleModal={toggleModal} />}
    </>
  );
};

export default PetsList;
