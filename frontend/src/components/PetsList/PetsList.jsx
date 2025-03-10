import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectStatusFilter } from "../../redux/filters/selectors";
import { selectToken } from "../../redux/auth/selectors";
import {
  fetchAllPets,
  fetchPetsByOwner,
  fetchPetsByFavorite,
} from "../../redux/pets/operations";
import { selectAllPets, selectFavoritePets } from "../../redux/pets/selectors";
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
  const pets = useSelector(
    status === statusFilters.favorite ? selectFavoritePets : selectAllPets
  );
  const [filterValue] = useOutletContext();
  const [showModal, setShowModal] = useState(false);
  const [curId, setCurId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      if (
        !token &&
        (status === statusFilters.own || status === statusFilters.favorite)
      ) {
        return;
      }

      switch (status) {
        case statusFilters.own:
          dispatch(fetchPetsByOwner(token));
          break;
        case statusFilters.favorite:
          dispatch(fetchPetsByFavorite(token));
          break;
        default:
          dispatch(fetchAllPets());
      }

      setLoading(false);
    };

    fetchData();
  }, [dispatch, status, token]);
  console.log(pets);
  const toggleModal = () => setShowModal((prev) => !prev);

  const filteredPets = pets.filter(
    ({ status: petStatus, breed }) =>
      petStatus === status && breed.includes(filterValue)
  );

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <ul className={css.pets_list}>
          {pets.map((pet) => (
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

      {!loading && filteredPets.length === 0 && (
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
