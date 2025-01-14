import { useState } from "react";
import { createPortal } from "react-dom";
import PetCard from "../PetCard";
import Modal from "../Modal";
import css from "./_PetsList.module.scss";
import PetDetails from "../PetDetails";

const petDetailsEl = document.getElementById("modal-root");

const PetsList = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPetId, setSelectedPetId] = useState(null);

  const handleCardClick = (id) => {
    setSelectedPetId(id);
    setShowModal(true);
  };

  return (
    <>
      <ul className={css.pets_list}>
        <PetCard _petId={"1"} onClick={() => handleCardClick("1")} />
        <PetCard _petId={"2"} onClick={() => handleCardClick("2")} />
        <PetCard _petId={"3"} onClick={() => handleCardClick("3")} />
        <PetCard _petId={"4"} onClick={() => handleCardClick("4")} />
        <PetCard _petId={"5"} onClick={() => handleCardClick("5")} />
        <PetCard _petId={"6"} onClick={() => handleCardClick("6")} />
        <PetCard _petId={"7"} onClick={() => handleCardClick("7")} />
        <PetCard _petId={"8"} onClick={() => handleCardClick("8")} />
      </ul>
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)}>
            <PetDetails petId={selectedPetId} />
          </Modal>,
          petDetailsEl
        )}
    </>
  );
};

export default PetsList;
