import { useRef } from "react";

function Modal({ children }) {
  const dialogRef = useRef();
  const testRef = useRef();

  function open() {
    console.log(testRef.current.innerHTML);
    dialogRef.current.showModal();
  }
  function close() {
    dialogRef.current.close();
  }
  return (
    <>
      <button onClick={open}>Open</button>
      <dialog ref={dialogRef}>
        {children}
        <button onClick={close}>Close</button>
      </dialog>
      <div ref={testRef}>Test</div>
    </>
  );
}

export default Modal;
