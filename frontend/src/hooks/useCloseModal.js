import { useCallback } from "react";

const useCloseModal = (ref, onClose) => {
  return useCallback(
    (e) => {
      const isBackdropTarget = ref.current && e.target === ref.current;

      if (e.key === "Escape" || isBackdropTarget) {
        onClose();
      }
    },
    [onClose, ref]
  );
};

export default useCloseModal;
