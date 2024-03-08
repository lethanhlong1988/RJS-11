import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function RefModal({ children }, ref) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialogRef.current.showModal();
      },
      close: () => {
        dialogRef.current.close();
      },
    };
  });

  return createPortal(
    <dialog className="modal" ref={dialogRef}>
      {children}
    </dialog>,

    document.getElementById("modal"),
  );
});

export default Modal;
