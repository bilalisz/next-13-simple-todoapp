import React from "react";

interface propsType {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  children: React.ReactNode;
}

const Modal: React.FC<propsType> = (props) => {
  const { modalOpen, setModalOpen, children } = props;

  return (
    <dialog
      id="my_modal_3"
      className={`modal ${modalOpen ? "modal-open" : ""}`}
    >
      <div className="modal-box">
        <button
          onClick={() => setModalOpen(false)}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
