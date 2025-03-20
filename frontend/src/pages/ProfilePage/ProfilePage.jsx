import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Container from "../../components/Container";
import Section from "../../components/Section";
import UserCard from "../../components/UserCard";
import UserPetList from "../../components/UserPetList";
import css from "./_ProfilePage.module.scss";
import Modal from "../../components/Modal";
import AddPetForm from "../../components/AddPetForm";
import { useDispatch } from "react-redux";
import { getUserDetails } from "../../redux/auth/operations";
import useAuth from "../../hooks/useAuth";

const portalEl = document.getElementById("modal-root");

const ProfilePage = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  const toggleModal = () => setShowModal((prev) => !prev);

  return (
    <Section>
      <Container>
        {user && (
          <div className={css.profile_wrapper}>
            <UserCard />
            <UserPetList handleAddPet={toggleModal} />
          </div>
        )}
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
