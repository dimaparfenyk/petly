import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import api from "../../api/pets";
import PetCard from "../PetCard";
import Modal from "../../components/Modal";
import PetDetails from "../../components/PetDetails";
import Spinner from "../../components/Spinner";

import css from "./_PetsList.module.scss";

const portalEl = document.getElementById("modal-root");

const PetsList = () => {
  const { pathname } = useLocation();
  const { category } = useParams();
  const [pets, setPets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [curId, setCurId] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(pathname);
  console.log(pathname.split("/")[2]);
  useEffect(() => {
    if (pathname.split("/")[2] === "own") {
      api.getPetsByOwner().then((res) => {
        setPets(res);
        setLoading(false);
      });
    }
    api.fetchPetsByCategory(category).then((res) => {
      setPets(res);
      setLoading(false);
    });
  }, [category]);

  const toggleModal = () => setShowModal((prev) => !prev);

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
      {showModal &&
        createPortal(
          <Modal onClose={toggleModal}>
            <PetDetails category={category} petId={curId} />
          </Modal>,
          portalEl
        )}
    </>
  );
};

export default PetsList;
