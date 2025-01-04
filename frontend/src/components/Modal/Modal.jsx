import { IoMdClose } from "react-icons/io";
import css from "./_Modal.module.scss";

const Modal = ({ onClose, children }) => {
  return (
    <div className={css.backdrop}>
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
