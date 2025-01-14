import { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import css from "./_Modal.module.scss";

const Modal = ({ onClose, children }) => {
  const backdropRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (backdropRef.current && e.target === backdropRef.current) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

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
