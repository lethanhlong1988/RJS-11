import { useRef, forwardRef } from "react";

const Modal = forwardRef(function RefModal({ children }, ref) {
  const dialogRef = useRef();
  console.log(dialogRef.current);

  function open() {
    dialogRef.current.showModal();
  }
  function close() {
    dialogRef.current.close();
  }
  return (
    <>
      <dialog ref={dialogRef}>
        {children}
        <button onClick={close}>Close</button>
      </dialog>
    </>
  );
});

export default Modal;
