import { useState } from "react";
import { createPortal } from "react-dom";
import Container from "../../components/Container";
import Section from "../../components/Section";
import UserCard from "../../components/UserCard";
import UserPetList from "../../components/UserPetList";
import css from "./_ProfilePage.module.scss";
import Modal from "../../components/Modal";
import AddPetForm from "../../components/AddPetForm";

const portalEl = document.getElementById("modal-root");

const ProfilePage = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);
  return (
    <Section>
      <Container>
        <div className={css.profile_wrapper}>
          <UserCard />
          <UserPetList handleAddPet={toggleModal} />
        </div>
        {showModal &&
          createPortal(
            <Modal onClose={toggleModal}>
              <AddPetForm onClose={toggleModal} />
            </Modal>,
            portalEl
          )}
      </Container>
    </Section>
  );
};

export default ProfilePage;
