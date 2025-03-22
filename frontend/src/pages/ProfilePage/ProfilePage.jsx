import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ToastContainer, toast } from "react-toastify";

import Container from "../../components/Container";
import Section from "../../components/Section";
import UserCard from "../../components/UserCard";
import UserPetList from "../../components/UserPetList";
import css from "./_ProfilePage.module.scss";
import Modal from "../../components/Modal";
import AddPetForm from "../../components/AddPetForm";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../redux/auth/operations";
import useAuth from "../../hooks/useAuth";
import { addUserPet } from "../../redux/userPets/operations";
import { selectError, selectMessage } from "../../redux/userPets/selectors";
import { clearError, clearMessage } from "../../redux/userPets/slice";

const portalEl = document.getElementById("modal-root");

const ProfilePage = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();
  const message = useSelector(selectMessage);
  const error = useSelector(selectError);

  const initialFormValues = {
    name: "",
    birth: "",
    breed: "",
    petImgUrl: "",
    comments: "",
  };

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error, message]);

  const toggleModal = () => setShowModal((prev) => !prev);

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
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
                <AddPetForm
                  onClose={toggleModal}
                  addEntity={addUserPet}
                  initial={initialFormValues}
                />
              </Modal>,
              portalEl
            )}
        </Container>
      </Section>
    </>
  );
};

export default ProfilePage;
