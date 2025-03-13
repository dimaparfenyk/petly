import { createPortal } from "react-dom";
import Modal from "../Modal/Modal";
import PetDetails from "../PetDetails";
import AddPetForm from "../AddPetForm";

const portalEl = document.getElementById("modal-root");

const ModalManager = ({ curId, toggleModal }) => {
  return createPortal(
    <Modal onClose={toggleModal}>
      {curId ? (
        <PetDetails petId={curId} />
      ) : (
        <AddPetForm onClose={toggleModal} />
      )}
    </Modal>,
    portalEl
  );
};

export default ModalManager;
