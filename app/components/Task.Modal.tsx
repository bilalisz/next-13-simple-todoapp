"use client";
import React, { FormEventHandler, useEffect, useState } from "react";
import Modal from "./Modal";

interface propsType {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  loading: boolean;
}

const TaskModal: React.FC<propsType> = (props) => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const { modalOpen, setModalOpen, value, onChange, onSubmit, loading } = props;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSumbitTask: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      {isClient ? (
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
          <form onSubmit={handleSumbitTask}>
            <h3 className="font-bold text-lg ">New Task</h3>
            <div className="modal-action">
              <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="input input-bordered w-full "
                placeholder="enter task"
                disabled={loading}
                required
              />
              <button
                disabled={loading}
                className="btn btn-primary"
                type="submit"
              >
                {loading ? (
                  <span className="loading loading-ring loading-lg">
                    <span className="loading loading-ring loading-md"></span>
                  </span>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </Modal>
      ) : null}
    </>
  );
};

TaskModal.defaultProps = {
  loading: false,
};

export default TaskModal;
