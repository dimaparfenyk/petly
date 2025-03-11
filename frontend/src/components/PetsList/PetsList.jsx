import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectStatusFilter } from "../../redux/filters/selectors";
import { selectToken } from "../../redux/auth/selectors";
import {
  fetchAllPets,
  fetchPetsByOwner,
  fetchFavoritePets,
} from "../../redux/pets/operations";
import {
  selectAllPets,
  // selectFavoritePets,
  selectIsLoading,
} from "../../redux/pets/selectors";
import statusFilters from "../../redux/constants";

import PetCard from "../PetCard";
import NoContentBlock from "../../components/NoContentBlock";
import Modal from "../../components/Modal";
import PetDetails from "../../components/PetDetails";
import Spinner from "../../components/Spinner";
import AddPetForm from "../AddPetForm";
import css from "./_PetsList.module.scss";

const portalEl = document.getElementById("modal-root");

const PetsList = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatusFilter);
  const token = useSelector(selectToken);
  const isLoading = useSelector(selectIsLoading);
  const pets = useSelector(selectAllPets);
  const [filterValue] = useOutletContext();
  const [showModal, setShowModal] = useState(false);
  const [curId, setCurId] = useState(null);
  const isPrivateStatus =
    status === statusFilters.own || status === statusFilters.favorite;
  console.log(pets);
  useEffect(() => {
    if (!isPrivateStatus) {
      dispatch(fetchAllPets());
    }
  }, [dispatch, isPrivateStatus]);

  useEffect(() => {
    if (isPrivateStatus) {
      dispatch(fetchPetsByOwner(token));
    }
  }, [dispatch, isPrivateStatus, token]);

  const toggleModal = () => setShowModal((prev) => !prev);

  const getFilteredPets = () => {
    if (isPrivateStatus) return pets;
    return pets.filter(
      ({ status: petStatus, breed }) =>
        petStatus === status && breed.includes(filterValue)
    );
  };
  const filteredPets = getFilteredPets();

  if (isLoading) return <Spinner loading={isLoading} />;

  return (
    <>
      {!isLoading && (
        <ul className={css.pets_list}>
          {filteredPets.map((pet) => (
            <PetCard
              key={pet._id}
              pet={pet}
              onClick={() => {
                setCurId(pet._id);
                setShowModal(true);
              }}
            />
          ))}
        </ul>
      )}

      {!isLoading && filteredPets.length === 0 && (
        <NoContentBlock toggleModal={toggleModal} />
      )}

      {showModal &&
        createPortal(
          <Modal onClose={toggleModal}>
            {curId ? (
              <PetDetails petId={curId} />
            ) : (
              <AddPetForm onClose={toggleModal} />
            )}
          </Modal>,
          portalEl
        )}
    </>
  );
};

export default PetsList;
