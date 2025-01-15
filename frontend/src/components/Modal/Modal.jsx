import { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import css from "./_Modal.module.scss";
import useCloseModal from "../../hooks/useCloseModal";

const Modal = ({ onClose, children }) => {
  const backdropRef = useRef(null);
  const handleCloseModal = useCloseModal(backdropRef, onClose);

  useEffect(() => {
    document.addEventListener("keydown", handleCloseModal);
    document.addEventListener("mousedown", handleCloseModal);
    return () => {
      document.removeEventListener("keydown", handleCloseModal);
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, [handleCloseModal]);

  return (
    <div className={css.backdrop} ref={backdropRef}>
      <div className={css.modal}>
        {children}

        <button onClick={onClose} className={css.close_btn}>
          <IoMdClose />
        </button>
      </div>
    </div>
  );
};

export default Modal;
